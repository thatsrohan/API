import { Controller } from '@nestjs/common';

@Controller('product')
export class ProductController {}
constructor(productServices:ProductService)  //dependency injection
@Post()
addProduct(
@Body('title')prodTitle:string,
@Body('description')prodDesc:string,
@Body('price')prodPrice:number,
){
    const generatedID=this.productService.insertProduct(prodTitle,prodDesc,prodPrice)
}
@Get()
getAllProducts(){
   return  this.productService.getAllProducts();
}
@Get(':id')
getSingleProduct(@Param('id')prodId:String){
   return this.productService.getSingleProduct()
 }
@Patch(':id')
updateProduct(){
this.ProductService.updateProduct(@Body('title')prodTitle:String,Body('description')prodDesc:String,@Body('price')prodPrice:number)
}
