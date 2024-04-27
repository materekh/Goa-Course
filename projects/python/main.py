import gspread
from google.oauth2.service_account import Credentials
# import time

scopes = ["https://www.googleapis.com/auth/spreadsheets"]
creds =  Credentials.from_service_account_file("C:/Users/natot/OneDrive/Documents/programs/goa course/projects/python/credentials.json", scopes=scopes)
client = gspread.authorize(creds)

sheet_id = "16yPJS96e-9yh6x-XsT7GK8FH3AX_-0TLvl_6ydnoL4E"
sheet = client.open_by_key(sheet_id).sheet1
i = 2
fines = {}
while sheet.row_values(i):
    vals = sheet.row_values(i)
    fines[vals[0]] = list(map(float,vals[1:]))
    sheet.update_cell(i,4,fines[vals[0]][0] / fines[vals[0]][1])
    i+=1    
# tm = time.time()
# dt = str(int(tm % (3600*24) // 3600)) + '-' + str(int(tm % (3600) // 60)) + '-' + str(int(tm % 60)) 
# sheet.update_cell(1,8,dt)
# while True:
#     tm=time.time()
#     if dt == str(int(tm % (3600*24) // 3600)) + '-' + str(int(tm % (3600) // 60)) + '-' + str(int(tm % 60)): continue
#     dt = str(int(tm % (3600*24) // 3600)) + '-' + str(int(tm % (3600) // 60)) + '-' + str(int(tm % 60))
#     sheet.update_cell(1,8,dt)