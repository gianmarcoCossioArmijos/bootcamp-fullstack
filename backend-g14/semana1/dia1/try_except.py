try:
    resultado = 10 / 0
except ZeroDivisionError as ErrorDeDivisionPorCero:
    print(ErrorDeDivisionPorCero)
except Exception as e:
    print(e.__class__)