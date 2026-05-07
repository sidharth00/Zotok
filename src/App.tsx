export default function ZotokDashboard() {
  const kpis = [
    { title: "Activation Rate", value: "89%" },
    { title: "Time to First Order", value: "4 Days" },
    { title: "Weekly Active Users", value: "82%" },
    { title: "Customer Health Score", value: "8.7/10" },
  ];

  const onboardingStages = [
    {
      stage: "Pre-Onboarding",
      progress: "100%",
      owner: "CSM",
      status: "Completed",
    },
    {
      stage: "Week 1 - Setup & Activation",
      progress: "90%",
      owner: "CSM + Tech",
      status: "In Progress",
    },
    {
      stage: "Week 2 - Value Realization",
      progress: "70%",
      owner: "CSM",
      status: "In Progress",
    },
    {
      stage: "Week 3 - Adoption",
      progress: "45%",
      owner: "CSM",
      status: "Pending",
    },
    {
      stage: "Week 4 - Optimization",
      progress: "20%",
      owner: "Leadership + CSM",
      status: "Pending",
    },
  ];

  const riskCustomers = [
    {
      name: "ABC Distributors",
      issue: "Low product adoption",
      health: "Medium Risk",
    },
    {
      name: "FreshMart Retail",
      issue: "Pending ERP Integration",
      health: "High Risk",
    },
    {
      name: "Smart FMCG",
      issue: "Inactive users",
      health: "Medium Risk",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-gray-800">
            Zotok Customer Onboarding Dashboard 🚀
          </h1>
          <p className="text-gray-500 mt-2">
            Monitor onboarding progress, customer adoption, health score, and
            lifecycle KPIs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {kpis.map((kpi, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-5">
              <h2 className="text-gray-500 text-sm">{kpi.title}</h2>
              <p className="text-3xl font-bold mt-2 text-gray-800">
                {kpi.value}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            30-Day Onboarding Journey 📈
          </h2>

          <div className="space-y-4">
            {onboardingStages.map((stage, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-4"
              >
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {stage.stage}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Owner: {stage.owner}
                    </p>
                  </div>

                  <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                    {stage.status}
                  </span>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-3 mt-3">
                  <div
                    className="bg-black h-3 rounded-full"
                    style={{ width: stage.progress }}
                  ></div>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  Progress: {stage.progress}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Customer Health Monitoring ❤️
            </h2>

            <div className="space-y-4">
              {riskCustomers.map((customer, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-4"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {customer.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {customer.issue}
                      </p>
                    </div>

                    <span className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700">
                      {customer.health}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Key Success Metrics 🎯
            </h2>

            <div className="space-y-5">
              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>ERP Integration Completion</span>
                  <span>92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-black h-3 rounded-full w-[92%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>User Training Completion</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-black h-3 rounded-full w-[80%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Workflow Automation Usage</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-black h-3 rounded-full w-[75%]"></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Customer Satisfaction (CSAT)</span>
                  <span>88%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-black h-3 rounded-full w-[88%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
