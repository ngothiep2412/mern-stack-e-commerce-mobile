import Main from "./Main";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { StripeProvider } from "";

const stripeKey = "your stripe Key";

export default function App() {
  return (
    <StripeProvider
      threeDSecureParams={{
        backgroundColor: "#fff",
        timeout: 5,
      }}
      merchantIdentifier="mern-stack-ecom.com"
      publishableKey={stripeKey}
    >
      <Provider store={store}>
        <Main />
      </Provider>
    </StripeProvider>
  );
}
