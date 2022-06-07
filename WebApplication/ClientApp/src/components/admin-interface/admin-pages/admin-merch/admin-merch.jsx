import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../redux/products/reducer";
import { authUser } from "../../../../redux/user/reducer";
import { CatalogItem } from "../../../catalog-item/catalog-item";
import { CatalogSort } from "../../../catalog-sort/catalog-sort";



export const AdminMerch = () => {
    const user = useSelector((state) => state.user.user);
    const [lastName, firstName, patronymic] = user.fio.split(" ")
    console.log(lastName, firstName, patronymic);
    const dispatch = useDispatch()
    const products = useSelector((state) => state.products.productsList);
    useEffect(() => {
        dispatch(fetchProducts());
        let userInfo = {
            userPassword: user.pass,
            userEmail: user.email,
        }
        dispatch(authUser(userInfo))
        }, [dispatch])

    return (
        <div className="catalog">
            {products.map((product)=> <CatalogItem product={product} key={product.id}/>)}
        </div>
    )
}