sum=0
a=input("შეიყვანეთ ნიშნები ჰარით გამოყოფილი: ").split()
for i in range(len(a)):
    sum+=int(a[i])
average=sum/len(a)
print("შენი ქულაა:",round(average,1),end=' ')
if (average>10) or (average<0):
    print("there is something wrong with you")
elif average>=9:
    print("გილოცავ მატრიცელო შენ გადმოგეცა 300 ლარიანი ბანძი ტოსტერი რისთვისაც შეალიე შენი ცხოვრების წლები")
elif average>=5:
    print("YOU ARE MID")
else:
    print("გილოცავ გაექეცი მატრიცას")