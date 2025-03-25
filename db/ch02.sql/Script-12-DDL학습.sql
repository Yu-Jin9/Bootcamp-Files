-- 3월 25일 화요일 _  두 번재 스크립트  /  DDL 

-- DDL : 데이터 정의어

CREATE DATABASE IF NOT EXISTS 세계학사;
USE 세계학사;

CREATE TABLE 학과 (
	학과번호 char(2),
	학과명 varchar(20),
	학과장명 varchar(20)
);

INSERT INTO 학과 VALUES
	('AA', '컴퓨터공학', '배경민'),
	('BB', '소프트웨어학과', '김남준'),
	('CC', '디자인융합학과', '박선영');

SELECT * FROM 학과;
DESC 학과;

-- 아직 PK/FK 설정 안함, 우선 타입에 대해서만 고민해서 작성
CREATE TABLE 학생 (
	학번 char(5),
	이름 varchar(20),
	생일 date, -- 형태 :  2000-03-10
	연락처 varchar(20),
	학과번호 char(2) -- 외래키 (학과의PK) 데이터 타입 동일하게 해줘야 됨
);

DESC 학생;

-- 학생 테이블 옆에 컬럼명 생략 (모든 데이터를 삽입할 경우에만)
-- 날짜같은 경우 이렇게 뮨자열로 넣으면 알아서 date type으로 바뀌어서 저장됨
INSERT INTO 학생 VALUES ('S0001', '이윤주', '2000-03-10', '01033334444', 'AA');
INSERT INTO 학생 VALUES ('S0002', '이승은', '2020-02-23', '01055556666', 'BB'),
					   ('S0003', '백재용', '2018-05-20', '01077778888', 'DD');

SELECT * FROM 학생;

-- 테이블의 구조만 복사하기
-- where 1=2 -> true/false 중에 where 1=2 : 항상 false
CREATE TABLE 휴학생 AS SELECT * FROM 학생 WHERE 1 = 2;
SELECT * FROM 휴학생;
-- 태이블의 구조와 데이터를 복사하기
CREATE TABLE 휴학생2 AS SELECT * FROM 학생;
SELECT * FROM 휴학생2;

DESC 휴학생;

-- 계산된 결과를 저장하기
CREATE TABLE 회원 (
	아이디 varchar(20) PRIMARY KEY,
	회원명 varchar(20),
	키 int, 
	몸무게 int,
	체질량지수 decimal(4,1) AS (몸무게 / power(키/100, 2)) stored
);
-- power(밑, 지수) 밑을 지수만큼 거듭제곱
-- stored 테이블에 실제 저장
DESC 회원;
INSERT INTO 회원(아이디, 회원명, 키, 몸무게) VALUES ('ARANG', '김아랑', 170, 55);
SELECT * FROM 회원;

-- 테이블, 뷰, 인덱스 => 객체 의 속성 변경
-- ALTER 사용

-- 컬럼 추가 'ADD' 
ALTER TABLE 학생 ADD 성별 char(1);
SELECT * FROM 학생;
-- 컬럼명 변경 'CHANGE COLUMN'
ALTER TABLE 학생 CHANGE COLUMN 연락처 휴대폰번호 varchar(20);
-- 컬럼 삭제 'DROP COLUMN'
ALTER TABLE 학생 DROP COLUMN 성별;
-- 테이블명 변경 'RENAME'
ALTER TABLE 학생 RENAME 졸업생;
SELECT * FROM 졸업생;

-- 테이블, 뷰, 인덱스의 삭제
-- DROP 
DROP TABLE 학과;
DROP TABLE 졸업생;

-- 제약조건
-- 테이블 생성 방법 1
CREATE TABLE 학과 (
	학과번호 char(2) PRIMARY key, -- NOT NULL , UNIQUE 
	학과명 varchar(20) NOT null, -- NOT NULL 
	학과장명 varchar(20) UNIQUE -- UNIQUE 
);
SELECT * FROM 학과;
DESC 학과;
INSERT INTO 학과 VALUES ('01', null , '홍교수'); -- NOT NULL 속성 확인
INSERT INTO 학과 VALUES ('01', '영어영문과', 'David'); -- PK 속성 확인 (UNIQUE)
INSERT INTO 학과 VALUES (NULL, '영어영문과', 'David'); -- PK 속성 확인 (NOT NULL)
INSERT INTO 학과 VALUES ('02', '영어영문과', '홍교수'); -- UNIQUE 속성 확인

DROP TABLE 학과;

-- 테이블 생성 방법 2
CREATE TABLE 학과 (
	학과번호 char(2) , -- NOT NULL , UNIQUE 
	학과명 varchar(20) NOT null, -- NOT NULL 
	학과장명 varchar(20),
	PRIMARY KEY(학과번호)
);
DESC 학과;

-- 테이블 생성 방법 3
CREATE TABLE 학과 (
	학과번호 char(2) , -- NOT NULL , UNIQUE 
	학과명 varchar(20), -- NOT NULL 
	학과장명 varchar(20)
);
ALTER TABLE 학과
ADD CONSTRAINT PK_학과 primary KEY(학과번호);
DESC 학과;

DROP TABLE 학생;
CREATE TABLE 학생(
	학번 char(5) PRIMARY key,
	이름 varchar(20) NOT null,
	생일 date NOT null,
	연락처 varchar(20) unique,
	학과번호 char(2),
	성별 char(1) CHECK(성별 IN ('남', '여')),
	등록일 date DEFAULT(curdate()),
	FOREIGN KEY (학과번호) REFERENCES 학과(학과번호)
);

INSERT INTO 학과 VALUES ('01', '국어국문과', '홍교수');
SELECT * FROM 학과;
-- 학과 (외래키)는 존재하는 값으로 참조해야 됨
INSERT INTO 학생 VALUES ('S001', '강감찬','2000-02-03', '01012341234','03', '남', null);
INSERT INTO 학생 VALUES ('S001', '강감찬','2000-02-03', '01012341234','01', '남', null);
SELECT * FROM 학생;
-- check 속성 확인
INSERT INTO 학생 VALUES ('S002', '사임당','2000-02-03', '01022223333','01', '여', null);
-- 등록일 default 값 넣기
INSERT INTO 학생(학번, 이름, 생일, 연락처, 학과번호, 성별) VALUES ('S003', '이순신','2000-02-03', '01044445555','01', '남');

CREATE TABLE 과목 (
	과목번호 char(5) PRIMARY key,
	과목명 varchar(20) NOT NULL ,
	학점 int NOT NULL CHECK (학점 BETWEEN 2 and 4),
	구분 varchar(20) check(구분 IN ('전공', '교양', '일반'))
);

CREATE TABLE 수강 (
	수강번호 int PRIMARY KEY AUTO_INCREMENT ,
	수강년도 char(4) NOT NULL ,
	수강학기 varchar(20) NOT NULL
			CHECK (수강학기 IN ('1학기','2학기', '여름학기', '겨울학기')),
	학번 char(5) NOT NULL ,
	과목번호 char(5) NOT NULL ,
	성적 NUMERIC(3,1) CHECK(성적 betweene 0 AND 4.5),
	FOREIGN KEY (학번) REFERENCES 학생(학번),
	FOREIGN KEY (과목번호) REFERENCES 과목(과목번호)
);

SELECT * FROM 과목;
SELECT * FROM 학생;
SELECT * FROM 학과;

INSERT INTO 학과
VALUES ('AA','컴퓨터공학과','배경민');

INSERT INTO 학과
VALUES ('AA','소프트웨어학과','김남준');

INSERT INTO 학과
VALUES ('CC','디자인융합학과','박선영');

-- 오류 수정
-- 학과번호는 PK라서 동일한 값 삽입 불가
INSERT INTO 학과
VALUES ('BB','소프트웨어학과','김남준');

USE 세계학사;
-- 학과 데이터
INSERT INTO 학생 VALUES ('S001', '홍길동', '01');
INSERT INTO 학생 VALUES ('S002', '이몽룡', '02');

### 연습문제

USE 세계무역;
SELECT * FROM 제품;
DESC 제품;

-- 1. 제품 테이블의 재고 컬럼에 CHECK 제약조건을 추가하시오.
-- * ALTER TABLE 명령을 사용합니다.
-- 제약조건: 재고는 0보다 크거나 같아야 합니다.
-- modify : 데이터 타입 / 제약조건 변경
ALTER TABLE 제품 MODIFY COLUMN 재고 int CHECK(재고 >=0 );

-- . 제품 테이블에 재고금액 컬럼을 추가하시오. 이때 재고금액은 ‘단가 * 재고’가 자동 계산되어 저장되도록 합니다.  
--    * ALTER TABLE 명령을 사용합니다.
--    * STORED 옵션을 사용하면 됩니다.
-- 데이터 타입도 명시해 줘야 함
ALTER TABLE 제품 ADD COLUMN 재고금액 int as (단가 * 재고) STORED;

-- 3. 제품 테이블에서 제품 레코드를 삭제하면 주문세부 테이블에 있는 관련 레코드도 함께 삭제되도록 주문세부 테이블의 제품번호 컬럼에 외래키 제약조건과 옵션을 설정하시오.
-- * ALTER TABLE 명령을 사용합니다.
-- * 외래키 제약조건을 설정할 때  ON DELETE CASCADE 옵션을 설명하면,  
-- 부모 레코드 삭제시 자식 레코드도 연쇄적으로 삭제되어 데이터의 일관성을 유지할 수 있습니다.

ALTER TABLE 주문세부 MODIFY COLUMN 제품번호 int, 
ADD CONSTRAINT 제품번호 FOREIGN KEY (제품번호) 
REFERENCES 제품(제품번호) ON DELETE CASCADE;

DESC 제품;
DESC 주문세부;

### 실전문제

1. 영화 테이블과 평점관리 테이블을 만들고자 합니다. 다음 테이블 명세서를 참고하여 테이블을 생성하시오.

CREATE DATABASE 영화데이터;
USE 영화데이터;

CREATE TABLE 영화 (
	영화번호 char(5) PRIMARY KEY,
	타이틀 varchar(100) NOT NULL ,
	장르 varchar(20) CHECK (장르 IN ('코미디', '드라마', '다큐', 'SF', '액션', '역사','기타')),
	배우 varchar(100) NOT NULL ,
	감독 varchar(50) NOT NULL ,
	제작사 varchar(150) NOT NULL ,
	개봉일 date,
	등록일 date DEFAULT (curdate())
);
DESC 영화;

-- 2. 다음 테이블 명세서를 참고하여 평점관리 테이블을 생성하시오.
CREATE TABLE 평점관리 (
	번호 int PRIMARY KEY AUTO_INCREMENT ,
	평가자닉네임 varchar(50) NOT NULL ,
	영화번호 char(20) NOT NULL , 
	평점 int CHECK (평점 BETWEEN 1 AND 5), 
	평가 varchar(2000) NOT NULL ,
	등록일 date DEFAULT (curdate()),
	FOREIGN KEY (영화번호) REFERENCES 영화(영화번호)
);
DESC 평점관리;

-- 3. 영화  테이블에 다음과 같이 데이터를 추가하시오.
INSERT INTO 영화 
VALUES ('0001', '피묘', '드라마', '최민식, 김고은', '장재현', '쇼박스', '2024-02-22', DEFAULT);
INSERT INTO 영화 
VALUES ('0002', '듄:파트2', '액션', '티모시 샬라메, 젠데이아', '드니 뵐뇌브', '레전더리 픽처스', '2024-02-28', DEFAULT);
SELECT * FROM 영화;

-- 4. 평점관리 테이블에 다음과 같이 데이터를 추가하시오.
INSERT INTO 평점관리 
VALUES (1, '영화광', '0001', 5, '미치도록 스릴이 넘쳐요', DEFAULT);
INSERT INTO 평점관리 
VALUES (2, '무비러브', '0002', 4, '장엄한 스케일이 좋다', DEFAULT);
SELECT * FROM 평점관리;

-- 5. 영화번호를 00003으로도 새로운 레코드를 넣어서 오류 발생 여부를 확인하시오.
INSERT INTO 평점관리
VALUES (3, '영화가 좋다', '0003', 4.5, '재밌었어요', DEFAULT );

-- 6. 영화테이블에서 레코드를 지우면 외래키 제약조건에 의해 오류가 발생하는지 확인하시오.
DELETE FROM 영화 WHERE 영화번호 = '0001';

-- 7. ON CASCADE 옵션을 통해 6번 문제를 해결하시오.
ALTER TABLE 평점관리 ADD CONSTRAINT 영화번호 FOREIGN KEY (영화번호) 
REFERENCES 영화(영화번호) ON DELETE CASCADE;

DELETE FROM 영화 WHERE 영화번호 = '0001';
SELECT * FROM 영화;








