import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import React, { PureComponent } from 'react'
import { Swipe, Cell, Button } from '@nutui/nutui-react-taro'

import './index.styl'

// 使用 definePageConfig 定义的页面配置对象不能使用变量
definePageConfig({
  navigationBarTitleText: '首页',
})

export default class Index extends PureComponent<any, any> {

  handleGoTestA = () => {
    Taro.navigateTo({
      url: '/pages/testA/index'
    })
  }

  handleGoBack = () => {
    Taro.navigateBack()
  }

  render() {
    return (
      <View className="nutui-react-demo">
        <View className="index">
          首页
        </View>
        <View className="swipe">
          <Swipe
            rightAction={
              <Button
                type="primary"
                shape="square"
                onClick={() => {
                  Taro.showToast({
                    title: '点击了删除'
                  })
                }}
              >
                删除
              </Button>
            }
          >
            <Cell title="左滑删除" radius={0} />
          </Swipe>

        </View>
      </View>
    )
  }

}
