import subprocess
import schedule
import time

subprocess.run(['python', 'searchProductList.py'])
subprocess.run(['python', 'searchProductDetails.py'])



def my_task():
  subprocess.run(['python', 'searchProductList.py'])
  subprocess.run(['python', 'searchProductDetails.py'])


schedule.every().day.at("02:30").do(my_task)

while True:
    schedule.run_pending()
    time.sleep(60)
