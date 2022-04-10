import { getInjectionReport } from '../api/axios/getInjectionReport';
import { useQuery } from 'react-query';
const useReportQuery = () => {
	return useQuery('injection_report', getInjectionReport, {
		refetchOnWindowFocus: false,
		enabled: false,
		staleTime: Infinity,
	});
};

export default useReportQuery;
