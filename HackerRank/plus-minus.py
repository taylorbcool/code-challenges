#!/bin/python3

import math
import os
import random
import re
import sys

# Complete the plusMinus function below.
def plusMinus(arr):
    pos = []
    neg = []
    zero = []

    for i in arr:
        if i > 0:
            pos.append(i)
        elif i < 0:
            neg.append(i)
        else:
            zero.append(i)
    
    pos_dec = (len(pos) / len(arr))
    neg_dec = (len(neg) / len(arr))
    zero_dec = (len(zero) / len(arr))

    print(round(pos_dec, 6))
    print(round(neg_dec, 6))
    print(round(zero_dec, 6))

if __name__ == '__main__':
    n = int(input())

    arr = list(map(int, input().rstrip().split()))

    plusMinus(arr)
