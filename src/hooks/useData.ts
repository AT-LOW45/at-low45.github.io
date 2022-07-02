import axios from "axios";
import { useEffect, useState } from "react";
import { developmentApi } from "../api";

interface EntityData<T> {
	data: Array<T>;
	isLoading: boolean;
	fetchError: string | null;
}

export const useData = <T>(
	route: string,
	paramQuery: { [key: string]: any } = {}
): EntityData<T> => {
	const [data, setData] = useState<Array<T>>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [fetchError, setFetchError] = useState<string | null>(null);

	useEffect(() => {
		const source = axios.CancelToken.source();

		async function getData(url: string) {
			try {
				const response = await developmentApi.get<Array<T>>(url, {
					params: paramQuery,
					cancelToken: source.token,
				});

				setData(response.data);
				setIsLoading(false)
				setFetchError(null);
			} catch (err) {
				setFetchError(
					"An error occurred while attempting to make the request. Please try again"
				);
				setData([]);
			} finally {
				setIsLoading(false);
			}
		}

		getData(route);

		return () => {
			source.cancel();
		};
	}, []);

	return { data, isLoading, fetchError };
};
