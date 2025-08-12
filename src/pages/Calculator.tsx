import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, DollarSign, Calendar, Percent, TrendingUp, Sparkles, BarChart, Users, ShieldCheck } from "lucide-react";
import { Chart, registerables } from "chart.js";

// Register Chart.js components
Chart.register(...registerables);

// Custom Button Component
const Button = ({ children, className, variant = "default", size = "lg", to, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500";
  const variants = {
    default: "bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-cyan-700",
    outline: "border-2 border-white text-white bg-transparent hover:bg-white/10",
    secondary: "bg-gray-800 text-white shadow-md hover:bg-gray-700",
  };
  const sizes = {
    lg: "px-8 py-4 text-lg",
    md: "px-6 py-3 text-base",
  };

  return (
    <Link
      to={to}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ""}`}
      {...props}
    >
      {children}
    </Link>
  );
};

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
  viewport: { once: true },
};

const Calculator = () => {
  const [initialAmount, setInitialAmount] = useState(1000);
  const [years, setYears] = useState(10);
  const [interestRate, setInterestRate] = useState(5);
  const [monthlyContribution, setMonthlyContribution] = useState(100);
  const [contributionFrequency, setContributionFrequency] = useState("monthly");
  const [compoundingFrequency, setCompoundingFrequency] = useState("monthly");
  const [finalAmount, setFinalAmount] = useState(0);
  const [totalContributions, setTotalContributions] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);
  const [chartData, setChartData] = useState([]);
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  const calculateCompoundInterest = () => {
    const principal = initialAmount;
    const rate = interestRate / 100;

    const frequencies = {
      daily: 365,
      monthly: 12,
      quarterly: 4,
      annually: 1,
    };

    const contributionFreqs = {
      weekly: 52,
      biweekly: 26,
      monthly: 12,
      annually: 1,
    };

    const n = frequencies[compoundingFrequency];
    const contribN = contributionFreqs[contributionFrequency];

    let data = [];

    if (interestRate === 0) {
      const totalContrib = principal + monthlyContribution * contribN * years;
      setFinalAmount(totalContrib);
      setTotalContributions(totalContrib);
      setTotalInterest(0);

      for (let y = 0; y <= years; y++) {
        const yContribs = principal + monthlyContribution * contribN * y;
        data.push({
          year: y,
          total: yContribs,
          contributions: yContribs,
          interest: 0,
        });
      }
    } else {
      const effectiveRate = Math.pow(1 + rate / n, n / contribN) - 1;
      const numPeriods = contribN * years;

      for (let y = 0; y <= years; y++) {
        const yPeriods = contribN * y;
        const yCompound = principal * Math.pow(1 + effectiveRate, yPeriods);
        let yContribFV = 0;
        if (effectiveRate > 0) {
          yContribFV = monthlyContribution * (Math.pow(1 + effectiveRate, yPeriods) - 1) / effectiveRate;
        } else {
          yContribFV = monthlyContribution * yPeriods;
        }
        const yTotal = yCompound + yContribFV;
        const yContribs = principal + monthlyContribution * contribN * y;
        const yInterest = yTotal - yContribs;

        data.push({
          year: y,
          total: yTotal,
          contributions: yContribs,
          interest: yInterest,
        });
      }

      setFinalAmount(data[data.length - 1].total);
      setTotalContributions(data[data.length - 1].contributions);
      setTotalInterest(data[data.length - 1].interest);
    }

    setChartData(data);
  };

  useEffect(() => {
    calculateCompoundInterest();
  }, [initialAmount, years, interestRate, monthlyContribution, contributionFrequency, compoundingFrequency]);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (canvasRef.current) {
      chartRef.current = new Chart(canvasRef.current, {
        type: "bar",
        data: {
          labels: chartData.map((data) => `Year ${data.year}`),
          datasets: [
            {
              label: "Contributions",
              data: chartData.map((data) => data.contributions),
              backgroundColor: "#3b82f6", // Blue for contributions
              stack: "stack1",
            },
            {
              label: "Interest",
              data: chartData.map((data) => data.interest),
              backgroundColor: "#06b6d4", // Cyan for interest
              stack: "stack1",
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: "Year",
                color: "#1f2937",
                font: { size: 14, weight: "bold" },
              },
              grid: { display: false },
              ticks: { color: "#1f2937" },
            },
            y: {
              title: {
                display: true,
                text: "Amount ($)",
                color: "#1f2937",
                font: { size: 14, weight: "bold" },
              },
              ticks: {
                callback: function (value) {
                  return `$${Math.round(value / 1000)}k`;
                },
                color: "#1f2937",
              },
              beginAtZero: true,
              grid: { color: "#e5e7eb" },
            },
          },
          plugins: {
            legend: {
              display: true,
              position: "top",
              labels: {
                color: "#1f2937",
                font: { size: 12 },
              },
            },
            tooltip: {
              backgroundColor: "#ffffff",
              titleColor: "#1f2937",
              bodyColor: "#1f2937",
              borderColor: "#e5e7eb",
              borderWidth: 1,
              callbacks: {
                label: function (context) {
                  return `${context.dataset.label}: $${context.parsed.y.toFixed(2)}`;
                },
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartData]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
     {/* Hero Section */}
<section
  className="relative min-h-screen flex items-center justify-center overflow-hidden py-10 sm:py-20 lg:py-24"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Dark overlay to make text pop */}
  <div className="absolute inset-0 bg-black/50 z-0" />

  {/* Gradient overlays */}
  <div className="absolute inset-0 opacity-20 z-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_#3b82f6_0%,_transparent_50%)]" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_#06b6d4_0%,_transparent_50%)]" />
  </div>

  {/* Floating icons */}
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute top-1/4 left-1/4 animate-float">
      <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-white opacity-60" />
    </div>
    <div className="absolute top-1/3 right-1/4 animate-float animation-delay-1000">
      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-white opacity-60" />
    </div>
    <div className="absolute bottom-1/3 left-1/5 animate-float animation-delay-2000">
      <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-white opacity-40" />
    </div>
  </div>

  {/* Content */}
  <div className="container relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-3 rounded-full mb-8 border border-white/20 shadow-lg"
      >
        <TrendingUp className="w-5 h-5 text-accent-dark" />
        <span className="text-sm font-medium tracking-wide">Grow Your Wealth</span>
      </motion.div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
        Compound Interest
        <span className="block text-accent-dark mt-2 pb-3">Calculator</span>
      </h1>

      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
        Discover the power of compound interest and see how your savings can grow over time with tailored strategies.
      </p>

      <motion.div whileTap={{ scale: 0.95 }} className="inline-flex">
        <Button
          to="#calculator"
          size="lg"
          className="bg-accent-dark text-white min-w-[220px] justify-center"
          aria-label="Try the Calculator"
        >
          Try Now
          <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </motion.div>
  </div>
</section>


      {/* Why This Calculator Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why Use This
              <span className="block text-accent-dark mt-2">
                Calculator?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Compound interest is often called the "eighth wonder of the world" by Albert Einstein. It allows your money to grow exponentially over time by earning interest on both your principal and accumulated interest. Our calculator helps you visualize this magic in action.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                id: "visualize",
                title: "Visualize Growth",
                description: "See interactive charts that break down contributions vs. interest over time, making complex calculations easy to understand.",
                icon: <BarChart className="w-10 h-10 text-white" />,
                gradient: "from-blue-400 via-blue-500 to-blue-600",
              },
              {
                id: "customize",
                title: "Customize Scenarios",
                description: "Adjust variables like contribution frequency, compounding periods, and rates to model real-world investment strategies.",
                icon: <Users className="w-10 h-10 text-white" />,
                gradient: "from-cyan-400 via-cyan-500 to-teal-600",
              },
              {
                id: "secure",
                title: "Plan Securely",
                description: "Get accurate projections to make informed decisions about retirement, savings goals, or investment portfolios.",
                icon: <ShieldCheck className="w-10 h-10 text-white" />,
                gradient: "from-indigo-400 via-indigo-500 to-blue-600",
              },
            ].map((feature) => (
              <motion.div
                key={feature.id}
                variants={fadeInUp}
                className="bg-gray-50 rounded-3xl shadow-md p-8 border border-gray-200/50 hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md bg-gradient-to-br ${feature.gradient}`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-50" id="calculator">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Plan Your
              <span className="block text-accent-dark mt-2">
                Financial Growth
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Input your investment details to visualize how your wealth can grow with the power of compounding.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 lg:grid-cols-2 items-start"
          >
            {/* Sticky Results Section */}
            <motion.div
              variants={fadeInUp}
              className="lg:sticky lg:top-24 space-y-8"
            >
              <div className="bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 border border-gray-100 hover:shadow-xl">
                <h3 className="text-2xl font-extrabold  mb-6 text-center">
                  Your Investment Growth
                </h3>
                <div className="space-y-6">
                  <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                    <p className="text-sm text-gray-600 mb-2 font-semibold">Total Savings After {years} Years</p>
                    <p className="font-bold text-3xl text-primary">
                      {formatCurrency(finalAmount)}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600 font-semibold">Initial Investment</span>
                      <span className="font-semibold text-gray-900 ">{formatCurrency(initialAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600 font-semibold">Total Contributions</span>
                      <span className="font-semibold text-gray-900">{formatCurrency(totalContributions)}</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm text-gray-600 font-semibold">Interest Earned</span>
                      <span className="font-semibold text-primary">
                        {formatCurrency(totalInterest)}
                      </span>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-blue-100">
                      <p className="text-sm text-gray-600 mb-1 font-semibold">Total Growth</p>
                      <p className="font-bold text-xl text-primary">
                        {totalContributions > 0 ? ((totalInterest / totalContributions) * 100).toFixed(1) : 0}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Input Form */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 border border-gray-100 hover:shadow-xl">
                <h3 className="text-2xl font-extrabold  mb-6 text-center ">
                  Investment Details
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm  text-gray-700 font-semibold flex items-center gap-2">
                      Initial Investment Amount
                      <span className="text-xs text-gray-400">(Starting principal)</span>
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={initialAmount}
                        onChange={(e) => setInitialAmount(Math.max(0, Number(e.target.value)))}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 hover:border-blue-300 transition-colors"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      Investment Period (Years)
                      <span className="text-xs text-gray-400">(Time horizon)</span>
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={years}
                        onChange={(e) => setYears(Math.max(1, Number(e.target.value)))}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 hover:border-blue-300 transition-colors"
                        min="1"
                        max="50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      Annual Interest Rate (%)
                      <span className="text-xs text-gray-400">(Expected return)</span>
                    </label>
                    <div className="relative">
                      <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Math.max(0, Number(e.target.value)))}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 hover:border-blue-300 transition-colors"
                        min="0"
                        max="20"
                        step="0.1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      Regular Contribution Amount
                      <span className="text-xs text-gray-400">(Ongoing additions)</span>
                    </label>
                    <div className="relative">
                      <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="number"
                        value={monthlyContribution}
                        onChange={(e) => setMonthlyContribution(Math.max(0, Number(e.target.value)))}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 hover:border-blue-300 transition-colors"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Contribution Frequency</label>
                    <select
                      value={contributionFrequency}
                      onChange={(e) => setContributionFrequency(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 hover:border-blue-300 transition-colors"
                    >
                      <option value="weekly">Weekly</option>
                      <option value="biweekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="annually">Annually</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700">Compounding Frequency</label>
                    <select
                      value={compoundingFrequency}
                      onChange={(e) => setCompoundingFrequency(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 hover:border-blue-300 transition-colors"
                    >
                      <option value="daily">Daily</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                      <option value="annually">Annually</option>
                    </select>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Chart Section */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 bg-white p-8 rounded-3xl shadow-lg transition-all duration-300 border border-gray-100 hover:shadow-xl"
          >
            <h3 className="text-2xl font-extrabold  mb-6 text-center">
              Growth Over Time
            </h3>
            <div className="h-[400px] w-full">
              <canvas ref={canvasRef}></canvas>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 to-cyan-100">
        <div className="container px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Maximize Your
              <span className="block text-accent-dark mt-2">
                Wealth
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Simple strategies to accelerate your financial growth and secure your future.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {[
              {
                id: "early",
                title: "Start Early",
                description: "Time is your greatest asset in building wealth. The sooner you start, the more your money can grow.",
                icon: <Calendar className="w-10 h-10 text-white" />,
                gradient: "from-blue-400 via-blue-500 to-blue-600",
              },
              {
                id: "regular",
                title: "Contribute Regularly",
                description: "Even small, consistent contributions can lead to significant growth over time.",
                icon: <DollarSign className="w-10 h-10 text-white" />,
                gradient: "from-emerald-400 via-green-500 to-teal-600",
              },
              {
                id: "high-yield",
                title: "Choose High-Yield",
                description: "Opt for investments with higher returns to maximize your wealth-building potential.",
                icon: <TrendingUp className="w-10 h-10 text-white" />,
                gradient: "from-purple-400 via-purple-500 to-indigo-600",
              },
            ].map((tip) => (
              <motion.div
                key={tip.id}
                variants={fadeInUp}
                className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8 border border-gray-200/50 hover:shadow-xl transition-shadow duration-300"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.85) 100%)",
                }}
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-md bg-gradient-to-br ${tip.gradient}`}
                >
                  {tip.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{tip.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{tip.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_rgba(59,130,246,0.2)_0%,_transparent_50%)] opacity-15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_rgba(6,182,212,0.2)_0%,_transparent_50%)] opacity-15" />

        <div className="container relative z-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Grow Your
              <span className="block text-accent-dark mt-2">
                Wealth?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Take control of your financial future with a personalized strategy. Schedule a free consultation today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  to="/contact#contact-form"
                  size="lg"
                  className="min-w-[240px] justify-center"
                  aria-label="Schedule a Free Consultation"
                >
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  to="/about"
                  size="lg"
                  variant="outline"
                  className="min-w-[240px] justify-center"
                  aria-label="Learn More About Our Mission"
                >
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2.5rem;
            line-height: 1.1;
          }

          .lg\\:grid-cols-2 {
            grid-template-columns: 1fr;
          }

          .lg\\:grid-cols-3 {
            grid-template-columns: 1fr;
          }

          .lg\\:sticky {
            position: static;
          }
        }
      `}</style>
    </div>
  );
};

export default Calculator;