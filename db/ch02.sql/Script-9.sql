-- 3월 24알 월요일

-- ch.06

USE 세계무역;

-- 최대 마일리지를 가진 고객 출력.
SELECT max(마일리지) FROM 고객;
SELECT * FROM 고객 WHERE 마일리지 = 128790;
-- 위의 쿼리문 두개 합친 버전 (서브쿼리)
SELECT * FROM 고객  WHERE 마일리지 = (SELECT max(마일리지) FROM 고객); -- 최대 마일리지 

-- 주문번호 'H0250'인 고객의 고객회사명, 담당자명을 출력하시오.
SELECT 고객번호 FROM 주문 WHERE 주문번호 = 'H0250';
SELECT 고객회사명, 담당자명 FROM 고객 WHERE 고객번호 = 'NARHA';
-- 위의 두 쿼리문 합치기
SELECT 고객회사명, 담당자명 FROM 고객 WHERE 고객번호 = (SELECT 고객번호 FROM 주문 WHERE 주문번호 = 'H0250');

-- 복수행 서브쿼리 : 복수행 비교연산자 IN, ANY(SOME), ALL, EXISTS

-- '부산광역시' 고객이 주문한 주문건수를 출력하기
-- IN : ~중에 하나라도
SELECT 고객번호 FROM 고객 WHERE 도시 = '부산광역시';
SELECT count(*) AS 주문건수 FROM 주문 WHERE 고객번호 = "LIDBO";
-- 합친 버전
SELECT COUNT(*) AS 주문건수
FROM 주문
WHERE 고객번호 IN ( SELECT 고객번호 FROM 고객
                    WHERE 도시 = '부산광역시' );

-- ANY :  마일리지 > 부산마일리지 OR ... OR ... OR   
SELECT 마일리지 FROM 고객 WHERE 도시 = '부산광역시';
SELECT 담당자명, 고객회사명, 마일리지 FROM 고객 WHERE 마일리지 > 806;

SELECT 담당자명, 고객회사명, 마일리지
FROM 고객
WHERE 마일리지 > ANY( SELECT 마일리지 FROM 고객
                      WHERE 도시 = '부산광역시' ); 

-- ALL :  AND ... AND ... AND 
SELECT AVG(마일리지) FROM 고객 GROUP BY 지역;
SELECT 담당자명, 고객회사명, 마일리지 FROM 고객 WHERE 마일리지 > 10000;

SELECT 담당자명, 고객회사명, 마일리지
FROM 고객
WHERE 마일리지 > ALL ( SELECT AVG(마일리지) FROM 고객 
                        GROUP BY 지역 ); 




