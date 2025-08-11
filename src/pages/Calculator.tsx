import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, DollarSign, Calendar, Percent } from "lucide-react";
import { Chart, registerables } from 'chart.js';

// Register Chart.js components
Chart.register(...registerables);

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
      annually: 1
    };
    
    const contributionFreqs = {
      weekly: 52,
      biweekly: 26,
      monthly: 12,
      annually: 1
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
          interest: 0
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
          interest: yInterest
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
        type: 'bar',
        data: {
          labels: chartData.map(data => `Yr ${data.year}`),
          datasets: [
            {
              label: 'Contributions',
              data: chartData.map(data => data.contributions),
              backgroundColor: 'rgba(54, 162, 235, 0.6)',
              stack: 'stack1',
            },
            {
              label: 'Interest',
              data: chartData.map(data => data.interest),
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
              stack: 'stack1',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              title: {
                display: true,
                text: 'Year'
              },
              grid: {
                display: false
              }
            },
            y: {
              title: {
                display: true,
                text: 'Amount ($)'
              },
              ticks: {
                callback: function(value) {
                  return `$${Math.round(value / 1000)}k`;
                }
              },
              beginAtZero: true
            }
          },
          plugins: {
            legend: {
              display: true,
              position: 'top'
            },
            tooltip: {
              callbacks: {
                label: function(context) {
                  return `${context.dataset.label}: $${context.parsed.y.toFixed(2)}`;
                }
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [chartData]);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-primary-gradient py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-4xl lg:text-5xl text-primary-foreground mb-6">
            Compound Interest Calculator
          </h1>
          <p className="font-body text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            See how your savings can grow over time with the power of compound interest. 
            Calculate returns with different contribution amounts, interest rates, and compounding frequencies.
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Input Form */}
            <div className="space-y-8">
              <Card className="wealth-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <DollarSign className="w-6 h-6 text-primary" />
                    <span>Investment Details</span>
                  </CardTitle>
                  <CardDescription>
                    Enter your investment parameters to see potential growth
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="initial-amount">Initial Investment Amount</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="initial-amount"
                        type="number"
                        value={initialAmount}
                        onChange={(e) => setInitialAmount(Number(e.target.value))}
                        className="pl-8"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="years">Investment Period (Years)</Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="years"
                        type="number"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="pl-10"
                        min="1"
                        max="50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="interest-rate">Annual Interest Rate (%)</Label>
                    <div className="relative">
                      <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input
                        id="interest-rate"
                        type="number"
                        value={interestRate}
                        onChange={(e) => setInterestRate(Number(e.target.value))}
                        className="pl-10"
                        min="0"
                        max="20"
                        step="0.1"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="monthly-contribution">Regular Contribution Amount</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="monthly-contribution"
                        type="number"
                        value={monthlyContribution}
                        onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                        className="pl-8"
                        min="0"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Contribution Frequency</Label>
                    <Select value={contributionFrequency} onValueChange={setContributionFrequency}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="biweekly">Bi-weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="annually">Annually</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Compounding Frequency</Label>
                    <Select value={compoundingFrequency} onValueChange={setCompoundingFrequency}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                        <SelectItem value="annually">Annually</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Results */}
            <div className="space-y-8">
              <Card className="wealth-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="w-6 h-6 text-accent" />
                    <span>Your Investment Growth</span>
                  </CardTitle>
                  <CardDescription>
                    Here's how your money could grow over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Final Amount */}
                    <div className="text-center p-6 bg-accent/10 rounded-xl border border-accent/20">
                      <p className="font-body text-muted-foreground mb-2">Total Savings After {years} Years</p>
                      <p className="font-heading font-bold text-3xl text-accent">
                        {formatCurrency(finalAmount)}
                      </p>
                    </div>

                    <Separator />

                    {/* Breakdown */}
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-body text-muted-foreground">Initial Investment</span>
                        <span className="font-heading font-semibold text-foreground">
                          {formatCurrency(initialAmount)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-body text-muted-foreground">Total Contributions</span>
                        <span className="font-heading font-semibold text-foreground">
                          {formatCurrency(totalContributions)}
                        </span>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="font-body text-muted-foreground">Interest Earned</span>
                        <span className="font-heading font-semibold text-accent">
                          {formatCurrency(totalInterest)}
                        </span>
                      </div>
                    </div>

                    <Separator />

                    {/* Growth Percentage */}
                    <div className="text-center p-4 bg-primary/10 rounded-xl border border-primary/20">
                      <p className="font-body text-muted-foreground mb-1">Total Growth</p>
                      <p className="font-heading font-bold text-xl text-primary">
                        {totalContributions > 0 ? ((totalInterest / totalContributions) * 100).toFixed(1) : 0}%
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="wealth-card">
                <CardHeader>
                  <CardTitle>Growth Over Time</CardTitle>
                  <CardDescription>Breakdown of contributions and interest earned each year</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <canvas ref={canvasRef}></canvas>
                  </div>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card className="wealth-card">
                <CardHeader>
                  <CardTitle>Maximize Your Growth</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="font-body text-muted-foreground">
                        <strong>Start Early:</strong> Time is your greatest asset in building wealth
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="font-body text-muted-foreground">
                        <strong>Contribute Regularly:</strong> Even small monthly additions make a big difference
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <p className="font-body text-muted-foreground">
                        <strong>Choose High-Yield Options:</strong> Every percentage point matters
                      </p>
                    </div>
                  </div>
                  
                  <Button className="btn-hero w-full mt-4">
                    Get Personalized Strategy
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculator;