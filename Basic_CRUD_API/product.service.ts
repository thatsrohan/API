import{Injectable} from '@nestjs/common';
import {product} from './product.model';
@Injectable()
export class ProductService{
    private products:product[];
    insertProduct(Title:String,Desc:String,Price:number)
    { const prodId=Math.random().toString();
        const newProd=new product(prodId,Title,Desc,Price)
        this.products.push(newProd);
        return prodId;
    }
}

private findProduct(id:string):[product,number]
{
const prodIndex=this.products.findIndex(prod=>prod.id===id)
const prod=this.products[prodIndex];
return[product,prodIndex];
}
getSingleProduct(prodId:String):[product,number]
{
    const prod=this.findProduct(prodId)[0];
    return {...prod};  //...spread operator 
}
getAllProducts()
{
    return{...this.products}
}
deleteProducts(prodID){
 const index= this.findProduct(prodID)[1];
this.products.splice(index,1);
}
updateProduct(ProdID:String,Title:String,Desc:String,Price:number)
{
    const [product,index]=this.findProduct(ProdID);
    updatedProduct={...product}
if(Title){
    updatedproduct.Title=Title;
}
if(Desc){
    updatedProduct.Desc=Desc;
}
if(Price){
    updatedProduct.Price=Price;
}
this.products.index=updatedProduct;
}
