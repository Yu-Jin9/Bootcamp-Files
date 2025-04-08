package com.study.PrVMAPI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class APIController {

    @Autowired
    private ProductService productService;

    // 상품추가 api
    @PostMapping("product")
    public ResDTO<Product> addProduct(@RequestBody Product product) {
        productService.addProduct(product);

        ResDTO<Product> response = new ResDTO<Product>();
        response.setStatus("ok");
        response.setMessage("상품이 추가되었습니다.");
        response.setResult(product);

        return response;
    }

    // 전체 상품 목록
    @GetMapping("/products")
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }

    // 제품 하나의 정보 목록
    @GetMapping("product")
    public ResDTO<Product> getProduct(@RequestParam String name) {
        Product product = productService.getProductByName(name);

        ResDTO<Product> response = new ResDTO<Product>();

        if(product != null) {
            response.setStatus("ok");
            response.setMessage("상품 조회 성공 : " + product.getName());
            response.setResult(product);
        } else {
            response.setStatus("fail");
            response.setMessage("해당 상품을 찾을 수 없습니다.");
            response.setResult(null);
        }
        return response;
    }

    // 제품 수정 api
    @PutMapping("product/modify")
    public ResDTO<Product> updateProduct(@RequestParam String originalName, @RequestBody Product product) {

        ResDTO<Product> response = new ResDTO<Product>();

        Product updatedProduct = productService.updateProduct(originalName, product);

        if( updatedProduct != null) {
            response.setStatus("success");
            response.setMessage("상품이 추가되었습니다.");
            response.setResult(updatedProduct);
        } else {
            response.setStatus("fail");
            response.setMessage("해당 상품을 찾을 수 없습니다.");
            response.setResult(null);
        }

        return response;
    }

    // 삭제 api
    @DeleteMapping("product/delete")
    public ResDTO<Product> deleteProduct(@RequestParam String name) {

        Product deleted = productService.deleteProduct(name);

        ResDTO<Product> response = new ResDTO<Product>();

        if (deleted != null) {
            response.setStatus("ok");
            response.setMessage("상품 삭제 완료: " + deleted.getName());
            response.setResult(deleted); // 삭제된 상품 반환
        } else {
            response.setStatus("fail");
            response.setMessage("해당 상품이 존재하지 않습니다.");
            response.setResult(null);
        }

        return response;
    }



}