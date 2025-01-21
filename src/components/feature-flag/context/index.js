import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from '../data'

export const featureFlagsContext = createContext(null);

export default function FeatureFlagGlobalState({children}) {

    const [loading, setLoading] =  useState(false);
    const [enabledFlags, setEnableFlags] = useState({});

    const fetchFeatureFlags = async () => {
        setLoading(true);
        try {
            const response = await featureFlagsDataServiceCall();
            console.log(response);
            setEnableFlags(response)
            setLoading(false)

        } catch (error) {
            throw new Error(error)
        }
       
    }

    useEffect(() => {
        fetchFeatureFlags()
    }, [])
    return <featureFlagsContext.Provider value={{ loading, enabledFlags }}>
        {children}
    </featureFlagsContext.Provider>

}