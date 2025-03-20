-- 집합 연산자  union , union all
-- UNION : 두 개의 SELECT 결과를 합쳐줌.
-- 		 : 컬럼의 갯수와 타입을 일치 시켜야 됨.
-- UNION ALL : 중복되는 레코드도 다 출력해 줌.
USE 세계무역;
SELECT 고객번호, 도시, 마일리지
FROM 고객
WHERE 도시 = '부산광역시'
UNION ALL
SELECT 고객번호, 도시, 마일리지
FROM 고객
WHERE 마일리지 < 1000
ORDER BY 고객번호;

-- IS NULL : 값이 NULL 이면 TRUE, 아니면 FALSE를 반환하는 연산자
SELECT * FROM 고객 WHERE 지역 IS NULL ;
SELECT * FROM 고객 WHERE 지역='';
 
-- IN  : ~중에 하나가 있으면 TRUE (여러개의 OR를 대체)
-- BETWEEN AND : ~이상 ~이하 범위를 지정할 때 (비교, AND 를 대체)
SELECT 담당자명, 마일리지 
FROM 고객
WHERE 마일리지 BETWEEN 100000 AND 200000;

-- LIKE : 문자열의 일부를 검사할 때 사용
--      : % 여러 문자열을 대체
--      : _ 한 글자를 대체
SELECT *
FROM 고객
WHERE 도시 LIKE '%광역시%'
AND (고객번호 LIKE '_C%' OR 고객번호 LIKE '__C%');

-- 실전문제
-- 1. 제품 테이블에서 세계무역이 취급하는 제품 중에서 '주스' 제품에 대한 모든 정보를 검색하시오.
SELECT * FROM 제품 WHERE 제품명 LIKE '%주스%';

-- 2. 제품 테이블에서 단가가 5,000원 이상 10,000원 이하인 '주스'제품에는 무엇이 있는지 검색하시오.
SELECT * FROM 제품 WHERE 제품명 LIKE '%주스%' AND 단가 BETWEEN 5000 AND 10000;

-- 3. 제품 테이블에서 제품번호가 1,2,4,7,11,20인 제품의 모든 정보를 보이시오.
SELECT * FROM 제품 WHERE 제품번호 IN (1,2,4,7,11,20);

-- 4. 제품 테이블에서 재고금액이 높은 상위 10개 제품에 대해 제품번호, 제품명, 
-- 단가, 재고, 재고금액(단가 * 재고)을 보이시오.
SELECT 제품번호, 제품명, 단가, 재고, (단가 * 재고)AS 재고금액 FROM 제품 ORDER BY (단가*재고) DESC LIMIT 10; 

-- Chapter 03 . 단일행 함수

-- TRIM : 양쪽 공백 제거 / LTRIM : 왼쪽 공백 제거 / RTRIM : 오른쪽 공백 제거
-- 내장 함수 : MYSQL 에서 지원하는 원래의 함수
-- ch03.sql
-- 내장 함수 : MySQL에서 지원하는 원래의 함수
-- 사용자 정의 함수 : 사용자가 직접 만든 함수
-- 내장 함수
-- 1.단일행 함수
-- 2.집계 함수(여러행 함수)

SELECT CHAR_LENGTH('HELLO') -- 글자 길이
		,LENGTH('HELLO') -- 글자 바이트 수
		,CHAR_LENGTH('한글')
		,LENGTH('한글');  -- utf8 유니코드(한글자 3바이트)
		
-- 문자열 연결
SELECT CONCAT('DREAMS', 'COME', 'TRUE');

-- 구분자를 이용한 문자열 연결
-- With Seperator의 약자
SELECT CONCAT_WS('-', '2024', '03', '19'); 

-- 문자열 일부 가져오기
SELECT LEFT('SQL 완전정복', 3);
SELECT RIGHT('SQL 완전정복', 4);
SELECT SUBSTR('SQL 완전정복', 2, 5); -- 시작인덱스(1부터 시작),개수  
SELECT SUBSTR('SQL 완전정복', 2); -- 인덱스부터 끝까지 

-- 문자열 제거후 가져오기
-- 2번째 구분자 이후를 지우고 가져온다.
SELECT SUBSTRING_INDEX('서울시 동작구 흑석로', ' ', 2); 
-- -2번째 구분자 이전를 지우고 가져온다.
SELECT SUBSTRING_INDEX('서울시 동작구 흑석로', ' ', -2);

-- 자리수 채움 문자
SELECT LPAD('SQL', 10, '#'); -- #######SQL
SELECT RPAD('SQL', 5, '*'); -- SQL**

-- 공백제거
SELECT LENGTH(LTRIM(' SQL '));
SELECT LENGTH(RTRIM(' SQL '));
SELECT LENGTH(TRIM(' SQL '));

SELECT LTRIM(' I LIKE SQL ');
SELECT RTRIM(' I LIKE SQL ');
SELECT TRIM(' I LIKE SQL ');
SELECT REPLACE (' I LIKE SQL ', ' ', ''); -- 모든 공백제거

-- 특정문자 제거(TRIM)
SELECT TRIM(BOTH '###' FROM '###SQL###');
SELECT TRIM(BOTH '#' FROM '###SQL###');
SELECT TRIM(BOTH '##' FROM '###SQL###');

SELECT TRIM(BOTH 'abc' FROM 'abcSQLLababc');
SELECT TRIM(LEADING  'abc' FROM 'abcSQLLababc');
SELECT TRIM(TRAILING  'abc' FROM 'abcSQLLababc');

-- 문자열 선택
SELECT FIELD('JAVA', 'SQL', 'JAVA', 'C'); -- 인덱스 2를 반환
SELECT FIND_IN_SET('JAVA', 'SQL,JAVA,C'); -- 인덱스 2를 반환
SELECT INSTR('네 인생을 살아라', '인생'); -- 인덱스 3을 반환 
SELECT LOCATE('인생', '네 인생을 살아라'); -- 인덱스 3을 반환
SELECT ELT(2, 'SQL', 'JAVA', 'C'); -- 인덱스 2인 'JAVA'을 반환

-- 문자열 중복
SELECT REPEAT('*', 5);
SELECT CONCAT(  REPEAT('*', 5), 'star'); -- *****star

-- 문자열 치환
SELECT REPLACE('010.123.4567', '.', '-');

-- 문자열 거꾸로
SELECT REVERSE('OLLEH');

-- 소수점 관련 함수들
SELECT CEILING(123.56); -- 소수점 첫째자리에서 올림
SELECT FLOOR(123.56); -- 소수점 첫째자리에서 버림
SELECT ROUND(123.56); -- 소수점 첫째자리에서 반올림
SELECT ROUND(123.56, 1); -- 소수점 둘째자리에서 반올림
SELECT ROUND(123.567, 2); -- 소수점 셋째자리에서 반올림
SELECT ROUND(3456.1234, -1); -- 일의 자리에서 반올림
SELECT ROUND(3456.1234, -2); -- 십의 자리에서 반올림
SELECT TRUNCATE(3456.1234, 1); -- 소수점 둘째자리에서 버림
SELECT TRUNCATE(3456.1234, 2); -- 소수점 세째자리에서 버림
SELECT TRUNCATE(3456.1234, -1); -- 일의 자리에서 버림
SELECT TRUNCATE(3456.1234, -2); -- 십의 자리에서 버림

-- 절대값
SELECT ABS( -120 );
SELECT ABS( 120 );
-- 부호
SELECT SIGN(-120 ); -- -1로 반환
SELECT SIGN( 120 ); -- 1로 반환
-- 나누기 함수
SELECT MOD( 203, 4 );
SELECT 203 % 4;
SELECT 203 MOD 4;
-- 제곱승
SELECT POWER(2, 3); -- 2의 3승
-- 제곱근
SELECT SQRT( 16 ); -- 16의 제곱근 
-- 랜덤값
SELECT RAND();  -- JAVA의 MATH.random()와 유사함. 0.0 ~ 0.999999...
SELECT RAND( 100 ); -- 100을 시드로 주어서 랜덤값 발생(특정값으로 고정)
SELECT ROUND( RAND() * 100 ); -- 0.0~0.999 * 100 => 99.5~9.99=> 0~100
SELECT FLOOR( RAND() * 100 ) + 1; -- 1~100

-- 현재 날짜시간 가져오기
SELECT now(),SYSDATE() ;
-- 현재 날짜 가져오기
SELECT CURDATE();
-- 현재 시간 가져오기
SELECT CURTIME(); 

-- 날짜 간격 구하기
SELECT now()
		,DATEDIFF('2025-12-25', now()) -- 640
	    ,DATEDIFF(now(), '2025-12-25'); -- -640
SELECT	now()
		,TIMESTAMPDIFF(YEAR, now(), '2025-12-20')
		,TIMESTAMPDIFF(MONTH, now(), '2025-12-20')
	    ,TIMESTAMPDIFF(DAY, now(), '2025-12-20'); -- 639
SELECT now()
		,DATEDIFF('2025-5-5 10:00', now() ) -- 자정 기준
        ,TIMESTAMPDIFF(DAY, now(), '2025-5-5 10:00'); -- 만24시간까지 고려

SELECT now()
		,ADDDATE(now(), 50) -- 50일후
		,ADDDATE(now(), INTERVAL 50 DAY) -- 50일후
		,ADDDATE(now(), INTERVAL 50 MONTH) -- 50달후
		,SUBDATE(now(), INTERVAL 50 HOUR); -- 50시간전

SELECT now()
		,LAST_DAY(now()) -- 이번달의 마지날 일
		,DAYOFYEAR(now()) -- 올해의 지난 날(80일째)
		,MONTHNAME(now()) -- 이번달의 이름(영문)
		,WEEKDAY(now());  -- 월(0)~일(6)   오늘 수(2)
		
-- 형변환 함수
SELECT CAST('1' AS UNSIGNED); -- 부호없는 숫자로 변환
SELECT CAST(2 AS CHAR(1)); -- chart형 1자리로 변환
SELECT CONVERT('1', UNSIGNED);    
SELECT CONVERT(2, CHAR(1));
-- 조건 함수 (자바의 삼항연산자와 유사)
SELECT IF( 10 > 20, '10', '20'); -- true이면 2번째 반환, false면 3번째 반환
SELECT IF( 12500 * 450 > 500000, '초과달성', '미달성');

-- null 체크 함수
SELECT IFNULL(1, 0);  -- 1항이 null이 아니면, 1항을 반환
                      --              이면, 2항을 반환
SELECT IFNULL(null, 0); -- null일 때를 고려하여 2항에 기본값을 넣어준다. 
SELECT IFNULL(null, 'null입니다.');

SELECT NULLIF( 12 * 10, 120 ); -- 1항과 2항이 같으면 null을 반환.
SELECT NULLIF( 12 * 10, 1200 ); -- 1항과 2항이 같지않으면, 1항을 반환.

-- 조건문 SELECT CASE문
SELECT CASE 
	WHEN 20 < 20 THEN '20보다 작음'
	WHEN 20 < 30 THEN '30보다 작음'
	ELSE '그외의 수'
END;

-- 조건 함수 (자바의 삼항 연산자와 유사)
SELECT IF (10>20, '10', '20'); -- true이면 2번째 반환, false면 3번째 반환
SELECT IF (12500 * 45 > 500000, '초과 달성', '미달성');

-- 연습문제
-- 1. 다음 조건에 따라 고객 테이블에서 고객회사명과 전화번호를 다른 형태로 보이도록 함수를 사용해봅시다. 
-- 고객회사명2와 전화번호2를 만드는 조건은 아래와 같습니다.
-- 조건
-- 1. 고객회사명2 : 기존 고객회사명 중 앞의 두 자리를 *로 변환한다.
-- 2. 전화번호2 : 기존 전화번호의 (xxx)xxx-xxxx 형식을 xxx-xxx-xxxx형식으로 변환한다.
SELECT * FROM 주문세부;
SELECT concat('**', SUBSTRING(고객회사명,2)) AS 고객회사명2,
REPLACE (SUBSTRING(전화번호, 2,3), ')','')AS 전화번호2
FROM 고객;

-- 2. 다음 조건에 따라 주문 세부 테이블의 모든 컬럼과 주문금액, 할인금액, 실제 주문금액을 보이시오. 
-- 이때 모든 금액은 1의 단위에서 버림을 하고 10원 단위까지 보이시오.
-- 조건
-- 1. 주문금액: 주문수량 * 단가
-- 2. 할인금액 : 주문수량 * 단가 * 할인율
-- 3. 실9주문금액 : 주문금액 - 할인금액
SELECT *
		,주수문량 * 단가  AS 주문금액,
		,주문수량*단가*할인율 AS 할인금액,
		, truncate(단가*주문수량*할인율, -1) AS 할인금액 -- 일의 자리에서 버림
		, 단가*주문수량 - truncate(단가*주문수량*할인율, -1) AS 실주문금액
FROM 주문세부;

SELECT * FROM 주문세부;

-- 3. 사원 테이블에서 전체 사원의 이름, 생일, 만나이, 입사일, 입사일수, 
-- 입사한 지 500일 후의 날짜를 보이시오.집에

SELECT * FROM 사원;

SELECT 이름, 생일, 만나이, 입사일, datediff(CURDATE(), 입사일) AS 입사일수,
DATE_ADD(입사일, INTERVAL 500 day) AS 입사 후 500일 
FROM 사원;

SELECT 이름
		, 생일
		, timestampdiff(YEAR, 생일, )

-- 4. 고객 테이블에서 도시 컬럼의 데이터를 다음 조건에 따라 '대도시'와 '도시'로 구분하고, 
-- 마일리지 점수에 따라서 'VVIP', 'VIP', '일반 고객'으로 구분하시오.
-- 조건
-- 1. 도시 구분: '특별시'나 '광역시'는 '대도시'로, 그 나머지 도시는 '도시'로 구분한다.
-- 2. 마일리지 구분 : 마일리지가 100,000점 이상이면 'VVIP고객', 10,000점 이상이면 'VIP고객', 그 나머지는 '일반고객'으로 구분한다.

-- 5. 주문 테이블에서 주문번호, 고객번호, 주문일 및 주문년도, 분기, 
-- 월, 일, 요일, 한글요일을 보이시오.

		
		
		
-- Chapter 04. 집계함수

-- 집계함수 : 여러 행에 걸쳐 있ㄴ은 값을 묶어서 계산을 수행하여 단일 값을 반환하는 함수
		-- 집계합수(다중행 함수) : COUNT(), SUM(), AVG(), MIN(), MAX()

SELECT COUNT(*) -- null을 포함한 모든 행의 개수 
FROM  고객;

-- 컬럼의 개수는 null을 빼고 집계한다.
SELECT COUNT(고객번호), COUNT(도시), COUNT(지역)  
FROM 고객;

SELECT SUM(마일리지), AVG(마일리지), MIN(마일리지), MAX(마일리지)
FROM 고객;

SELECT SUM(마일리지), AVG(마일리지), MIN(마일리지), MAX(마일리지)
FROM 고객
WHERE 도시 = '서울특별시';

