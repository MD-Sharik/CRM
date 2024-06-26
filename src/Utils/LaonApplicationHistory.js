import axios from "axios";

export const loanApplicationsLoader = async () => {
  const referralId = localStorage.getItem("AGENT")?.toUpperCase();
  const response = await axios.get(
    "https://crm-backend-jade.vercel.app/api/v2/agent/loanhistory",
    {
      params: {
        referralId: referralId,
      },
    }
  );

  return response.data.LoanList;
};

export const loanApplicationsList = async () => {
  const referralId = localStorage.getItem("AGENT").toUpperCase();
  const response = await axios.get(
    "https://crm-backend-jade.vercel.app/api/v2/agent/loanlist",
    {
      params: {
        referralId: referralId,
      },
    }
  );

  return response.data.LoanList;
};

export const loanStatusClient = async () => {
  const response = await axios.get(
    "https://crm-backend-jade.vercel.app/api/v2/loan/status",
    {
      params: {
        userId: localStorage.getItem("userId"),
      },
    }
  );

  return response.data.allLoans;
};
