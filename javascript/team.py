import random
# 전공, 개발
tf_dict = {0: "무유", 1: "무무", 2: "유무", 3: "유유"}
team0 = ['김채연', '이종혁']
team1 = ['이학승', '박소현',  '손하은']
team2 = ['류형선', '박형준', '손영재', '김규호', '전장우', '이유진', '진은비', '박해원', '박준영']
team3 = ['정채빈', '조유민', '백은규', '김우곤', '조주환', '유지원', '차희광', '이현기', '정혜미', '홍주이', '이희연', '장가은', '정수현', '김경민', '김태영', '김석찬']

total = [[] for _ in range(7)]

def makeTeam(team: list, total: list=total) -> list:
    for one in team:
        tmp = random.choice(total)
        while len(tmp)!=min([len(_) for _ in total]):
            tmp = random.choice(total)
        tmp += [one]
    return total

makeTeam(team1)
makeTeam(team2)
makeTeam(team0)
makeTeam(team3)
display(total)