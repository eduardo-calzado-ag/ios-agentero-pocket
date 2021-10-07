import { Commision } from "../types/commision.ts";

export const findCommisions = async (): Promise<Commision[]> =>
await new Promise((resolve, _) => {
  setTimeout(() => {
      const mockCommisions: Commision[] = [
          { period: new Date(2021,8), commision: 100000, fileUrl: 'https://dev.agentero.com/commission/file/agency-613f23ca593a6500011e5633/commissions_September_2021.pdf'},
          { period: new Date(2021,9), commision: 50000, fileUrl: 'https://dev.agentero.com/commission/file/agency-613f23ca593a6500011e5633/commissions_September_2021.pdf'},
          { period: new Date(2021,10), commision: 350000, fileUrl: 'https://dev.agentero.com/commission/file/agency-613f23ca593a6500011e5633/commissions_September_2021.pdf'}
        ];
    resolve(mockCommisions);
  }, 50);
});