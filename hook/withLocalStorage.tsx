import React, { useEffect, useState, ComponentType } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

// Define a type for the props of the wrapped component
type WithLocalStorageProps = {
  // Define any specific props if needed, or leave it as an empty object if the wrapped component can have any props
};

// Define the HOC
function WithLocalStorage<P extends WithLocalStorageProps>(
  WrappedComponent: ComponentType<P>
): React.FC<P> {
  const ComponentWithLocalStorage: React.FC<P> = (props) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const { userInfo } = useSelector((state: any) => state.auth);

    useEffect(() => {
      if (!userInfo) {
        router.push("auth/login");
      } else {
        setIsLoading(false);
      }
    }, [router]);

    // Optionally render a loading state
    if (isLoading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };

  return ComponentWithLocalStorage;
}

export default WithLocalStorage;
