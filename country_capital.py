country=("India","bangladesh","china","japan")
capital=("delhi","dhaka","beijing","tokyo")
a=zip(country,capital)
print(f""" country_series:{country},
      capital_series:{capital},
      country_capital:{tuple(a)}""")
