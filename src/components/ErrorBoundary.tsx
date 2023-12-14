import { Component, ErrorInfo, ReactNode } from "react";
import Layout from "./Layout";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    errorMessage: string;
}

class ErrorBoundary extends Component<Props, State> {


    public state: State = {
        hasError: false,
        errorMessage: ''
    };


    public static getDerivedStateFromError(error: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, errorMessage: error.toString() };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <Layout>
                    <div className="error">
                        <img src="https://media4.giphy.com/media/kwuWA0j4Rvo2FHfvug/giphy.gif?cid=ecf05e47dg6pgtd7qg5wyxu3giv1a6c0ojb4ozxoecvtsu77&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="error" />
                        <h1>Something went wrong...</h1>
                    </div>
                </Layout>

            )

        }

        return this.props.children;
    }
}

export default ErrorBoundary;