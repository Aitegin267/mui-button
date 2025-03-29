import { useState } from "react";
import { Header } from "./components/Header";
import { AvailableMeals } from "./components/meals/AvailableMeals";
import { Meals } from "./components/meals/Meals";
import { Summary } from "./components/Summary";
import { BasketContextProvider } from "../store/BasketContext";

function App() {
  const [basket, setBasket] = useState(false);

  function basketModalHandler() {
    setBasket((prev) => !prev);
  }
  return (
    <BasketContextProvider>
      <Header basket={basket} basketModalHandler={basketModalHandler} />
      <Summary />
      <Meals>
        <AvailableMeals />
      </Meals>
    </BasketContextProvider>
  );
}

export default App;
