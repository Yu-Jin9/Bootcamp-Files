-- 3월 25일 화요일 / DML 학습

USE 세계무역;
-- DML : 데이터 조작어
SELECT * FROM 부서;
INSERT INTO 부서(부서번호, 부서명) values('A5', '마케팅부');
-- 위와 동일한 내용
-- 전체 컬럼에 들어갈 데이터를 순서에 맞게 다 적으면 컬럼명은 생략 가능
SELECT * FROM 제품;
INSERT INTO 제품 values(91, '연어피클소스', NULL, 5000, 40);

DESC 제품;
SELECT * FROM 제품;

DESC 사원;

INSERT INTO 사원(사원번호, 이름, 직위, 성별, 입사일)
values('E20', '김사과', '수습사원', '남', curdate()),
	  ('E21', '박바나나', '수습사원', '여', curdate()),
	  ('E22', '정오렌지', '수습사원', '남', curdate());

SELECT * FROM 사원;
-- update 문장에 where을 적지 않으면 모든 행의 데이터가 바뀌니까 주의
UPDATE 사원 SET 이름 = '김레몬' WHERE 사원번호 = 'E20';

SELECT * FROM 제품;
UPDATE 제품 SET 포장단위 = '200 ml bottles', 단가 = 5500 WHERE 제품번호 = 91;

-- delete 문장도 where을 적지 않으면 모든 행의 데이터가 삭제됨.
DELETE FROM 사원 ORDER BY 입사일 DESC LIMIT 3;

SELECT * FROM 제품;
INSERT INTO 제품 (제품번호, 제품명, 단가, 재고) VALUES (91, '연어피클핫소스2', 6000, 50)
ON duplicate KEY UPDATE 제품명 = '연어피클핫소스1', 단가 = 7000, 재고 = 60;

-- 연습문제

-- 1. 제품 테이블에 레코드를 추가하시오.
-- 제품번호: 95, 제품명: 망고베리 아이스크림, 포장단위 : 400g, 단가: 800, 재고: 30
INSERT INTO 제품 (제품번호, 제품명, 포장단위, 단가, 재고) VALUES (95, '망고베리, 아이스크림', '400g', 800, 300);
SELECT * FROM 제품;

-- 2. 제품 테이블에 레코드를 추가하시오.
-- 제품번호: 96, 제품명: 눈꽃빙수맛 아이스크림, 단가: 2000
INSERT INTO 제품 (제품번호, 제품명, 단가) VALUES (96, '눈꽃빙수맛, 아이스크림', 2000);

-- 3. 문제2에서 추가한 96번 제품의 재고를 30으로 변경하시오.
UPDATE 제품 SET 재고 = 30 WHERE 제품번호 = 96;

-- 4. 사원이 한 명도 존재하지 않는 부서를 부서 테이블에서 삭제하시오.
SELECT * FROM 사원;
SELECT * FROM 부서;
SELECT * FROM 사원 WHERE 부서.부서번호 = 사원.부서번호;
DELETE FROM 사원 WHERE isnull(사원번호);
DELETE FROM 부서
WHERE NOT EXISTS (SELECT * FROM 사원 WHERE 부서.부서번호 = 사원.부서번호);

-- 실전문제
-- 1. 고객 테이블에서 새로운 레코드를 삽입하시오.
-- 고객번호: ZZZAA, 담당자명: 한동욱, 고객회사명: 자유트레이딩, 도시: 서울특별시
SELECT * FROM 고객; 
INSERT INTO 고객 (고객번호, 담당자명, 고객회사명, 도시) VALUES ('ZZZAA', '한동욱', '자유트레이딩', '서울특별시');

-- 2. 1번에서 삽입한 'ZZZAA' 고객의 레코드에 대해 컬럼 값을 다음과 같이 변경하시오.
-- 도시: 부산광역시, 마일리지: 100, 담당자직위: 대표 이사
UPDATE 고객 SET 도시 = '부산광역시', 마일리지 = 10, 담당자직위 = '대표 이사' WHERE 고객번호 = 'ZZZAA';

-- 3. 1번에서 삽입한 'ZZZAA' 고객의 레코드에 대해 마일리지를 
-- '대표 이사' 직위의 평균 마일리지 값으로 변경하시오.
-- 서브쿼리를 사용해서
-- CTE을 사용해서
-- 이 경우 update / delete에서 같은 테이블을 서브쿼리로 직접 참조하는 것을 혀용하지 않기 때문에 에러 발생함.
UPDATE 고객 SET 마일리지 = (SELECT avg(마일리지) FROM 고객 WHERE 담당자직위 = '대표 이사') WHERE 고객번호 = 'ZZZAA';
-- CTE 이용
WITH 대표이사_평균 AS (SELECT avg(마일리지) AS 평균마일리지 FROM 고객 WHERE 담당자직위 = '대표 이사')
UPDATE 고객 SET 마일리지 = (SELECT 평균마일리지 FROM 대표이사_평균) WHERE 고객번호 = 'ZZZAA';
SELECT * FROM 고객;

-- 4. 사원번호 'E15'의 레코드가 없으면 레코드를 새로 삽입하고, 레코드가 있다면 데이터 값을 수정하는 문장을 작성하시오.
-- 사원번호: E15, 이름: 이석진, 직윈: 수습사원
SELECT * FROM 사원;
INSERT INTO 사원 (사원번호, 이름, 직위) VALUES ('E15', '이석진', '수습사원')
ON duplicate KEY UPDATE 사원번호 = 'E15', 이름 = '이석진', 직위 = '수습사원';

-- 5. 1번에서 삽입한  'ZZZAA' 고객의 레코드를 삭제하시오.
DELETE FROM 고객 WHERE 고객번호 = 'ZZZAA';

-- 6. 4번에서 삽입한 'E15' 사원의 레코드를 삭제하시오.
DELETE FROM 사원 WHERE 사원번호 = 'E15'






























