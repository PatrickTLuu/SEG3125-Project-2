import {Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreateTournament from "./pages/CreateTournament";
import ViewTournaments from "./pages/ViewTournaments";
import PostTrade from "./pages/PostTrade";
import ViewTrades from "./pages/ViewTrades";


function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="" element={<Home />}></Route>
      <Route path="create_tournament" element={<CreateTournament />} />
      <Route path="view_tournaments" element={<ViewTournaments />} />
      <Route path="post_trade" element={<PostTrade />} />
      <Route path="view_trades" element={<ViewTrades />} />
      <Route path="*" element={<Home />} />
    </Routes>
  </HashRouter>
  );
}

export default App;
