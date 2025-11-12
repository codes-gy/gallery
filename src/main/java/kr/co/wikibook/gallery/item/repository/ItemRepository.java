package kr.co.wikibook.gallery.item.repository;

import kr.co.wikibook.gallery.item.dto.ItemRead;
import kr.co.wikibook.gallery.item.entity.Item;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {

    List<Item> findAllByIdIn(List<Integer> ids);

    ItemRead findById(int number);
}
