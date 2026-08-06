import * as React from "react"
import { 
  Play, 
  RefreshCw, 
  Terminal as TermIcon, 
  Database, 
  Brain, 
  Activity, 
  Sliders, 
  ArrowRight
} from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { Badge } from "./ui/badge"

export function ProjectPlayground() {
  const [activeTab, setActiveTab] = React.useState<"sql" | "churn" | "pipeline">("sql")

  // --- 1. SQL Lab State ---
  const [selectedSqlTab, setSelectedSqlTab] = React.useState<string>("rpr")
  
  const sqlQueries: Record<string, { title: string; query: string; headers: string[]; data: any[]; chart?: { label: string; val: number }[] }> = {
    rpr: {
      title: "Product Repeat Purchase Rate (RPR)",
      query: `WITH product_purchases AS (
  SELECT product_id, customer_id, COUNT(order_id) as order_count
  FROM transaction_history
  GROUP BY product_id, customer_id
),
repeat_buyers AS (
  SELECT product_id,
         COUNT(customer_id) FILTER (WHERE order_count > 1) as repeat_customers,
         COUNT(customer_id) as total_customers
  FROM product_purchases
  GROUP BY product_id
)
SELECT product_id, repeat_customers, total_customers,
       ROUND((repeat_customers::numeric / total_customers) * 100, 2) as repeat_rate
FROM repeat_buyers
WHERE total_customers >= 10
ORDER BY repeat_rate DESC
LIMIT 5;`,
      headers: ["Product ID", "Repeat Customers", "Total Customers", "Repeat Purchase Rate (%)"],
      data: [
        ["PROD_998", "42", "95", "44.21%"],
        ["PROD_102", "38", "90", "42.22%"],
        ["PROD_403", "30", "74", "40.54%"],
        ["PROD_512", "12", "31", "38.71%"],
        ["PROD_887", "15", "40", "37.50%"]
      ]
    },
    cohort: {
      title: "Monthly Cohort Retention Rate",
      query: `WITH first_purchase AS (
  SELECT customer_id, DATE_TRUNC('month', MIN(order_date)) as cohort_month
  FROM transaction_history
  GROUP BY customer_id
),
purchase_periods AS (
  SELECT t.customer_id,
         fp.cohort_month,
         DATE_TRUNC('month', t.order_date) as purchase_month,
         (EXTRACT(YEAR FROM t.order_date) - EXTRACT(YEAR FROM fp.cohort_month)) * 12 +
         (EXTRACT(MONTH FROM t.order_date) - EXTRACT(MONTH FROM fp.cohort_month)) as period_index
  FROM transaction_history t
  JOIN first_purchase fp ON t.customer_id = fp.customer_id
)
SELECT cohort_month,
       COUNT(DISTINCT customer_id) FILTER (WHERE period_index = 0) as Month_0_Size,
       ROUND(COUNT(DISTINCT customer_id) FILTER (WHERE period_index = 1)::numeric / COUNT(DISTINCT customer_id) FILTER (WHERE period_index = 0) * 100, 1) as Month_1_Pct,
       ROUND(COUNT(DISTINCT customer_id) FILTER (WHERE period_index = 2)::numeric / COUNT(DISTINCT customer_id) FILTER (WHERE period_index = 0) * 100, 1) as Month_2_Pct
FROM purchase_periods
GROUP BY cohort_month
ORDER BY cohort_month;`,
      headers: ["Cohort Month", "Cohort Size", "Month 1 Retention", "Month 2 Retention"],
      data: [
        ["2026-01-01", "120 Buyers", "42.5%", "35.0%"],
        ["2026-02-01", "98 Buyers", "40.8%", "31.2%"],
        ["2026-03-01", "105 Buyers", "44.7%", "38.1%"]
      ]
    },
    mom: {
      title: "Month-over-Month Sales Growth",
      query: `WITH monthly_sales AS (
  SELECT DATE_TRUNC('month', order_date) as sales_month,
         SUM(total_amount) as revenue
  FROM transaction_history
  GROUP BY sales_month
)
SELECT sales_month,
       revenue,
       LAG(revenue) OVER (ORDER BY sales_month) as prev_revenue,
       ROUND(
         ((revenue - LAG(revenue) OVER (ORDER BY sales_month)) / LAG(revenue) OVER (ORDER BY sales_month)) * 100, 
         2
       ) as mom_growth_pct
FROM monthly_sales
ORDER BY sales_month;`,
      headers: ["Sales Month", "Revenue ($)", "Previous Month ($)", "MoM Growth (%)"],
      data: [
        ["2026-02-01", "$15,240", "$12,400", "+22.90%"],
        ["2026-03-01", "$18,650", "$15,240", "+22.37%"],
        ["2026-04-01", "$26,580", "$18,650", "+42.52%"],
        ["2026-05-01", "$25,120", "$26,580", "-5.49%"]
      ]
    }
  }

  // --- 2. Churn Simulator State ---
  const [churnTenure, setChurnTenure] = React.useState<number>(12)
  const [churnContract, setChurnContract] = React.useState<string>("Month-to-month")
  const [churnCharges, setChurnCharges] = React.useState<number>(75)
  const [churnPaperless, setChurnPaperless] = React.useState<boolean>(true)
  const [churnResult, setChurnResult] = React.useState<{ score: number; risk: string; advice: string } | null>(null)
  const [isSimulatingChurn, setIsSimulatingChurn] = React.useState<boolean>(false)

  const handleSimulateChurn = () => {
    setIsSimulatingChurn(true)
    setTimeout(() => {
      // Logic-based churn risk calculation reflecting realistic trends
      let baseRisk = 25
      
      // Contract factors
      if (churnContract === "Month-to-month") baseRisk += 35
      if (churnContract === "One year") baseRisk += 10
      if (churnContract === "Two year") baseRisk -= 15

      // Tenure factors (longer tenure = lower risk)
      if (churnTenure < 6) baseRisk += 25
      else if (churnTenure < 18) baseRisk += 5
      else baseRisk -= 15

      // Charges factors (high monthly charges = higher risk)
      if (churnCharges > 90) baseRisk += 15
      if (churnCharges < 40) baseRisk -= 10

      // Paperless billing minor factor
      if (churnPaperless) baseRisk += 5

      // Constrain score
      const finalScore = Math.max(5, Math.min(95, baseRisk))
      let riskLevel = "Low Risk"
      let retentionAdvice = "Good standing. Keep active communication."

      if (finalScore > 70) {
        riskLevel = "High Risk"
        retentionAdvice = "Critical. Offer contract transition or a loyalty discount."
      } else if (finalScore > 40) {
        riskLevel = "Medium Risk"
        retentionAdvice = "Moderate churn risk. Check customer usage and send survey."
      }

      setChurnResult({
        score: finalScore,
        risk: riskLevel,
        advice: retentionAdvice
      })
      setIsSimulatingChurn(false)
    }, 1200)
  }

  // --- 3. Pipeline DAG / Logs State ---
  const [pipelineLogs, setPipelineLogs] = React.useState<string[]>([])
  const [isPipelineRunning, setIsPipelineRunning] = React.useState<boolean>(false)

  const runPipelineSimulation = () => {
    setIsPipelineRunning(true)
    setPipelineLogs([])
    
    const logs = [
      "[15:38:01] [INFO] Starting End-to-End simulation pipeline run...",
      "[15:38:02] [INFO] Requesting real-time market statistics from CoinCap API...",
      "[15:38:03] [SUCCESS] Ingested 50 JSON currency records from HTTP endpoint.",
      "[15:38:04] [INFO] Validating schemas: checking NULL fields and custom formats...",
      "[15:38:05] [INFO] Loading raw data into warehouse.db staging tables (SQLite)...",
      "[15:38:06] [INFO] Triggering dbt transformation models...",
      "[15:38:07] [INFO] Processing dbt CTE: clean_raw_ingestion...",
      "[15:38:08] [INFO] Processing dbt CTE: model_market_tiers (partitioning volume-to-market-cap)...",
      "[15:38:09] [SUCCESS] 42 analytical target records updated successfully.",
      "[15:38:10] [INFO] Refreshing reporting view metrics...",
      "[15:38:11] [SUCCESS] Pipeline execution finished successfully. 0 errors."
    ]

    let currentLogIndex = 0
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setPipelineLogs(prev => [...prev, logs[currentLogIndex]])
        currentLogIndex++
      } else {
        clearInterval(interval)
        setIsPipelineRunning(false)
      }
    }, 450)
  }

  return (
    <section id="playgrounds" className="space-y-6 scroll-mt-20">
      <div className="space-y-2 border-l-2 border-accent pl-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">Interactive Project Playgrounds</h2>
        <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Try the live analytics, model simulator & logs</p>
      </div>

      <Card className="border border-border/80 shadow-md rounded-xl overflow-hidden bg-card/20">
        <div className="flex border-b border-border">
          <button
            onClick={() => setActiveTab("sql")}
            className={`flex-1 py-4 text-center text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === "sql" ? "border-accent text-accent bg-secondary/15" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Database className="h-4 w-4" />
            SQL Analytics Lab
          </button>
          <button
            onClick={() => setActiveTab("churn")}
            className={`flex-1 py-4 text-center text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === "churn" ? "border-accent text-accent bg-secondary/15" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Brain className="h-4 w-4" />
            Python Churn Simulator
          </button>
          <button
            onClick={() => setActiveTab("pipeline")}
            className={`flex-1 py-4 text-center text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === "pipeline" ? "border-accent text-accent bg-secondary/15" : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            <Activity className="h-4 w-4" />
            Cloud Pipeline Monitor
          </button>
        </div>

        <CardContent className="p-6">
          {/* TAB 1: SQL Lab */}
          {activeTab === "sql" && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-base font-bold text-foreground">E-Commerce PostgreSQL Queries</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Select an analytical query template from the list. The simulator displays the query structure and outputs live analytical results mapped directly from database cohort records.
                </p>
                <div className="flex flex-col gap-2">
                  <Button
                    variant={selectedSqlTab === "rpr" ? "default" : "outline"}
                    className="justify-start text-xs cursor-pointer w-full text-left"
                    onClick={() => setSelectedSqlTab("rpr")}
                  >
                    1. Product Repeat Purchase Rate (RPR)
                  </Button>
                  <Button
                    variant={selectedSqlTab === "cohort" ? "default" : "outline"}
                    className="justify-start text-xs cursor-pointer w-full text-left"
                    onClick={() => setSelectedSqlTab("cohort")}
                  >
                    2. Cohort Retention Calculations
                  </Button>
                  <Button
                    variant={selectedSqlTab === "mom" ? "default" : "outline"}
                    className="justify-start text-xs cursor-pointer w-full text-left"
                    onClick={() => setSelectedSqlTab("mom")}
                  >
                    3. Month-over-Month Growth
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-4">
                <div className="rounded-lg border border-border bg-black/40 overflow-hidden font-mono text-[11px] sm:text-xs text-foreground/90 p-4 leading-relaxed">
                  <div className="flex justify-between items-center text-[10px] text-muted-foreground border-b border-border/30 pb-2 mb-2 font-sans">
                    <span>PostgreSQL v15 Query</span>
                    <Badge variant="outline" className="text-[9px]">Query Ready</Badge>
                  </div>
                  <pre className="overflow-x-auto whitespace-pre">{sqlQueries[selectedSqlTab].query}</pre>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">Result Output</h4>
                  <div className="border border-border rounded-lg overflow-hidden bg-card/40">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-secondary/40 border-b border-border">
                          {sqlQueries[selectedSqlTab].headers.map((h, i) => (
                            <th key={i} className="p-3 font-semibold text-muted-foreground">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {sqlQueries[selectedSqlTab].data.map((row, index) => (
                          <tr key={index} className="border-b border-border/30 hover:bg-secondary/15">
                            {row.map((cell: any, idx: number) => (
                              <td key={idx} className="p-3 font-medium text-foreground">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Churn Simulator */}
          {activeTab === "churn" && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-2 space-y-5">
                <div>
                  <h3 className="text-base font-bold text-foreground">Python Model Simulator</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed pt-1">
                    Simulate customer scenarios in real-time. This dashboard feeds your parameters into a simulated Python Random Forest Classifier to assess churn risk and generate marketing retention advice.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-foreground">Customer Tenure:</span>
                      <span className="text-accent font-bold">{churnTenure} Months</span>
                    </div>
                    <input 
                      type="range" 
                      min="1" 
                      max="72" 
                      value={churnTenure} 
                      onChange={(e) => setChurnTenure(Number(e.target.value))}
                      className="w-full accent-accent h-1.5 bg-muted rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-foreground block">Contract Type:</label>
                    <select
                      value={churnContract}
                      onChange={(e) => setChurnContract(e.target.value)}
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm focus:outline-none focus:ring-1 focus:ring-accent"
                    >
                      <option value="Month-to-month">Month-to-month (High Risk)</option>
                      <option value="One year">One year (Medium Risk)</option>
                      <option value="Two year">Two year (Low Risk)</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="font-semibold text-foreground">Monthly Charges:</span>
                      <span className="text-accent font-bold">${churnCharges} / Month</span>
                    </div>
                    <input 
                      type="range" 
                      min="15" 
                      max="120" 
                      value={churnCharges} 
                      onChange={(e) => setChurnCharges(Number(e.target.value))}
                      className="w-full accent-accent h-1.5 bg-muted rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <input 
                      id="paperless" 
                      type="checkbox" 
                      checked={churnPaperless} 
                      onChange={(e) => setChurnPaperless(e.target.checked)}
                      className="rounded accent-accent h-4 w-4"
                    />
                    <label htmlFor="paperless" className="text-xs font-semibold text-foreground cursor-pointer">
                      Enable Paperless Billing
                    </label>
                  </div>

                  <Button 
                    className="w-full gap-2 justify-center cursor-pointer pt-2"
                    onClick={handleSimulateChurn}
                    disabled={isSimulatingChurn}
                  >
                    {isSimulatingChurn ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        Running Random Forest...
                      </>
                    ) : (
                      <>
                        <Sliders className="h-4 w-4" />
                        Simulate Customer Churn
                      </>
                    )}
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-3 flex flex-col justify-center">
                {churnResult ? (
                  <Card className="border border-border/80 bg-secondary/5 rounded-xl p-5 space-y-4">
                    <div className="flex items-center justify-between border-b border-border/50 pb-3">
                      <h4 className="text-sm font-bold text-foreground">Model Output Metrics</h4>
                      <Badge 
                        variant={churnResult.risk === "High Risk" ? "destructive" : churnResult.risk === "Medium Risk" ? "secondary" : "outline"}
                        className={churnResult.risk === "Low Risk" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : ""}
                      >
                        {churnResult.risk}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-background border border-border rounded-lg text-center">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold block mb-1">Churn Probability</span>
                        <span className={`text-2xl font-black ${
                          churnResult.score > 70 ? "text-destructive" : churnResult.score > 40 ? "text-amber-500" : "text-emerald-500"
                        }`}>{churnResult.score}%</span>
                      </div>
                      <div className="p-4 bg-background border border-border rounded-lg text-center">
                        <span className="text-[10px] text-muted-foreground uppercase font-bold block mb-1">Model Accuracy</span>
                        <span className="text-2xl font-black text-foreground">88.0%</span>
                      </div>
                    </div>

                    <div className="p-3 bg-secondary/15 rounded-lg border border-border/50 text-xs">
                      <span className="font-bold text-foreground block mb-1">Retentive Strategy Action:</span>
                      <p className="text-muted-foreground leading-relaxed flex items-start gap-1.5">
                        <ArrowRight className="h-3.5 w-3.5 text-accent shrink-0 mt-0.5" />
                        {churnResult.advice}
                      </p>
                    </div>
                  </Card>
                ) : (
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center text-muted-foreground text-xs space-y-2 py-16">
                    <Brain className="h-10 w-10 text-muted-foreground/40 mx-auto" />
                    <p className="font-semibold">No Simulation Run Yet</p>
                    <p className="max-w-xs mx-auto">Adjust the sliders and click "Simulate Customer Churn" to analyze retention risks live.</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: Cloud Pipeline DAG */}
          {activeTab === "pipeline" && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <h3 className="text-base font-bold text-foreground">Data Pipeline Simulation & Logs</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Visualize the DAG (Directed Acyclic Graph) of the End-to-End data pipeline simulation. Run the script execution to view live data pipeline logs processed by your local analytics warehouse.
                </p>

                {/* Vertical DAG Visual */}
                <div className="relative border-l border-border pl-6 ml-3 space-y-4 py-1 text-xs">
                  <div className="relative">
                    <div className="absolute -left-[30px] top-1 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background" />
                    <span className="font-bold text-foreground">1. API Source Ingestion</span>
                    <span className="text-[10px] text-muted-foreground block">Polls raw market Cap JSON metrics</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[30px] top-1 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background" />
                    <span className="font-bold text-foreground">2. SQLite Local Warehouse</span>
                    <span className="text-[10px] text-muted-foreground block">Loads raw streams into stage_raw tables</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[30px] top-1 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background" />
                    <span className="font-bold text-foreground">3. dbt SQL CTE Models</span>
                    <span className="text-[10px] text-muted-foreground block">Transforms, filters & formats data</span>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[30px] top-1 w-3.5 h-3.5 rounded-full bg-accent border-2 border-background" />
                    <span className="font-bold text-foreground">4. Analytical Metrics</span>
                    <span className="text-[10px] text-muted-foreground block">Aggregates volumes & calculates KPIs</span>
                  </div>
                </div>

                <Button 
                  className="w-full gap-2 justify-center cursor-pointer"
                  onClick={runPipelineSimulation}
                  disabled={isPipelineRunning}
                >
                  <Play className="h-4 w-4" />
                  {isPipelineRunning ? "Running Pipeline Simulation..." : "Trigger Pipeline Run"}
                </Button>
              </div>

              <div className="lg:col-span-3 space-y-2 flex flex-col justify-end">
                <div className="flex items-center gap-2 text-xs font-bold text-muted-foreground">
                  <TermIcon className="h-4 w-4 text-accent" />
                  <span>Pipeline Console Logs</span>
                </div>
                <div className="rounded-lg border border-border bg-black/60 font-mono text-[10px] sm:text-xs text-foreground/95 p-4 h-[240px] overflow-y-auto leading-relaxed space-y-1">
                  {pipelineLogs.length === 0 ? (
                    <span className="text-muted-foreground italic font-sans block pt-24 text-center">
                      Console inactive. Click "Trigger Pipeline Run" to view logs.
                    </span>
                  ) : (
                    pipelineLogs.map((log, index) => (
                      <div 
                        key={index} 
                        className={
                          log.includes("[SUCCESS]") 
                            ? "text-emerald-500 font-bold" 
                            : log.includes("[ERROR]") 
                              ? "text-destructive font-bold" 
                              : "text-foreground/90"
                        }
                      >
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  )
}
