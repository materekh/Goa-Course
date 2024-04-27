def trianglefunc(side1,side2,side3):
    if side1>=side2:
        side1,side2=side2,side1
    if side2>=side3:
        side2,side3=side3,side2
    if side1>=side2:
        side1,side2=side2,side1
#    print(f'{side1},{side2},{side3}')
    if side1+side2<=side3:
        return 0
    else:
        return 1
a,b,c=input().split()
a,b,c=float(a),float(b),float(c)
if trianglefunc(a,b,c):
    print("YES")
else:
    print("NO")