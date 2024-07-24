import React, { useEffect, useState, ComponentType } from "react";
import { useRouter } from "next/navigation";
import { routes } from "@/components/routes";
import Loading from "@/components/general/loading";
import { useSelector } from "react-redux";

type WithoutLocalStorageProps = {
  // For any extra props
};

// Define the HOC
function WithoutLocalStorage<P extends WithoutLocalStorageProps>(
  WrappedComponent: ComponentType<P>
): React.FC<P> {
  const ComponentWithLocalStorage: React.FC<P> = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const { userInfo } = useSelector((state: any) => state.auth);

    useEffect(() => {
      if (userInfo) {
        router.replace(routes.dashboard);
      } else {
        setIsLoading(false);
      }
    }, [router]);

    // Optionally render a loading state
    if (isLoading) {
      return <Loading />;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithLocalStorage;
}

export default WithoutLocalStorage;
