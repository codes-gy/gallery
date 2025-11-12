package kr.co.wikibook.gallery.item.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ItemRead {

    private Integer id;
    private String name;
    private String imgPath;
    private Integer price;
    private Integer discountPer;

}
