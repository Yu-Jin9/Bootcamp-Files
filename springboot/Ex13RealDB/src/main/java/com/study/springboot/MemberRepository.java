package com.study.springboot;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<MemberEntity, Long> {
    //JPA 기본 함수
    // 1. findAll
    // 2. findById
    // 3. count()
    // 4. save()
    // 5. delete()
}
