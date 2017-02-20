# webpack-startkit

# 制作中



## memo

webpackはグローバルにインストール済みにします。
'''
$ npm install webpack -g
'''



webpackを使用してみたところ、エラーが発生した

'''
outputOptions.children = options.map(o => o.stats);
'''

node.jsのバージョンがv6.4以下だと発生するらしい。。。