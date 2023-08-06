import Taro from '@tarojs/taro'
import { history } from '@tarojs/router'
import { View } from '@tarojs/components'
import React, { PureComponent } from 'react'
import { Button } from "@nutui/nutui-react-taro"

import './index.styl'

// 使用 definePageConfig 定义的页面配置对象不能使用变量
definePageConfig({
  navigationBarTitleText: '测试页面A',
})

export default class TestA extends PureComponent<any, any> {

  private unblock: any

  componentDidShow() {
    if (!this.unblock) {
      const createBlock = () => {
        return history.block(tx => {

          const goNext = () => {
            this.unblock()
            tx.retry()
          }

          Taro.showModal({
            title: '测试 history block',
            content: '确定离开吗？',
            success: function (res) {
              if (res.confirm) {
                goNext()
              } else if (res.cancel) {
                Taro.showToast({
                  title: '取消返回'
                })
              }
            }
          })
        })
      }

      this.unblock = createBlock()
    }
  }

  componentWillUnmount() {
    this.unblock && this.unblock()
  }
  
  handleGoTestB = () => {
    Taro.navigateTo({
      url: '/pages/testB/index'
    })
  }

  handleGoBack = () => {
    Taro.navigateBack()
  }

  render() {
    return (
      <View className="test-a">
        <View className="index">
          测试页面 A
        </View>
        <View className="index">
          <Button 
            type="primary" 
            className="btn"
            onClick={this.handleGoTestB}
          >
            测试页面 B
          </Button>

          <Button 
            type="primary" 
            className="btn"
            onClick={this.handleGoBack}
          >
            返回上一页
          </Button>
        </View>
      </View>
    )
  }

}
