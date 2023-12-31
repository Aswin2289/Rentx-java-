package com.innovature.rentx.view;

import com.innovature.rentx.entity.Cart;
import com.innovature.rentx.json.Json;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class UserCartView {
    private Integer productId;
    private Integer quantity;
    @Json.DateFormat
    private Date startDate;
    @Json.DateFormat
    private Date endDate;
    private Integer cartCount;


    public UserCartView(Cart cart,Integer cartCount){

        this.productId=cart.getProduct().getId();
        this.quantity= cart.getQuantity();
        this.startDate=cart.getStartDate();
        this.endDate=cart.getEndDate();
        this.cartCount=cartCount;


    }
}
