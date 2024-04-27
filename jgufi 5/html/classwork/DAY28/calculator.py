while 1:
    s=input(f"Enter operation(+,-,*,/): ")
    a,b=input(f"Enter two numbers separated by a space: ").split()
    a=float(a)
    b=float(b)
    if s=='+':
        print(f'{a}+{b}={a+b}')
    elif s=='-':
        print(f'{a}-{b}={a-b}')
    elif s=='*':
        print(f'{a}*{b}={a*b}')
    elif s=='/':
        if b==0:
            print("Invalid input, cannot divide by zero")
        print(f'{a}/{b}={a/b}')
    else:
        print('Invalid operation')