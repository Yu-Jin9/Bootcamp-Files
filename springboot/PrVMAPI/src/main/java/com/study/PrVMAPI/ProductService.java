package com.study.PrVMAPI;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Service
public class ProductService {

    private final List<Product> productList = new ArrayList<>();

    public List<Product> getAllProducts() {
        return productList;
    }

    public void addProduct(Product product) {
        productList.add(product);
    }

    public Product getProductByName(String name) {
        return productList.stream()
                .filter(p -> p.getName().equals(name))
                .findFirst()
                .orElse(null);
    }

    public Product updateProduct(String originalName, Product newProduct) {
        for(Product p : productList) {
            if(p.getName().equals(originalName)) {
                p.setName(newProduct.getName());
                p.setPrice(newProduct.getPrice());
                p.setLimit_date(newProduct.getLimit_date());
                return p;
            }
        }
        return null;    // 받은 이름과 동일한 제품이 없으면 null 반환
    }

    public Product deleteProduct(String name) {
        Iterator<Product> iterator = productList.iterator();
        while (iterator.hasNext()) {
            Product p = iterator.next();
            if (p.getName().equals(name)) {
                iterator.remove();  // 안전하게 삭제
                return p;
            }
        }
        return null;    // 못찾으면 null 반환
    }

}
