import { CPageCategory } from "../components/GoodsCategory";
import { Route } from 'react-router-dom';
import { CProductPage } from './ProductPage';
import {CSubCategories} from '../modules/SubCategories'




function MainPage() {
    return (
        <main className="main">
            <div className="container-xxl">
                <div className="main-sub">
                    <Route path="/category/:_id" exact component={CSubCategories} />
                    <Route path="/subcategory/:_id" exact component={CSubCategories} />
                </div>
                <aside className="main-item">
                    <Route path="/product/:_id"  component={CProductPage} />
                    <Route path="/subcategory/:_id" exact component={CPageCategory} />
                    <Route path="/category/:_id" exact component={CPageCategory} />

                </aside>
            </div>
        </main>
    )
}

export { MainPage }