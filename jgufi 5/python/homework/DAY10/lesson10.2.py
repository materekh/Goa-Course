family = ["tamuna", "saba", "mate"]
age=[42,16,15]
ages="{}s age is {}, {}s age is {}, {}s age is {}".format(family[0],age[0],family[1],age[1],family[2],age[2])
print(ages)
age[0]+=10
age[1]+=10
age[2]+=10
ages="in ten years... {}s age is {}, {}s age is {}, {}s age is {}".format(family[0],age[0],family[1],age[1],family[2],age[2])
print(ages)
