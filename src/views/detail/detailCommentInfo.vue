<template>
  <div id="commentInfo" v-if="Object.keys(commentInfo).length !== 0">
    <!-- 评论头部模块 -->
    <div class="comment-head">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <!-- 评论信息 -->
    <div class="comment-info">
      <!-- 用户信息 -->
        <div class="user-info">
          <span class="user-logo">
            <img :src="commentInfo.list[0].user.avatar" />
          </span>
          <span>{{commentInfo.list[0].user.uname}}</span>
        </div>
        <!-- 用户评论 -->
        <div class='user-essay'>
          {{commentInfo.list[0].content}}
        </div>
        <!-- 评论时间等其它细节 -->
        <div class='other-info'>
          <span>{{commentInfo.list[0].created | getData}}</span>
          <span class="style">{{ commentInfo.list[0].style }}</span>
        </div>
    </div>
  </div>
</template>

<script>
// 引入时间转化格式
import {formatDate} from '../../common/utils'
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  filters: {
    getData: value => {
      // 将ms转化成固定格式
      let date = new Date(value * 1000);
      return formatDate(date,'yyyy-MM-dd hh:mm');
    }
  }
}
</script>

<style scoped>
  #commentInfo {
    border-bottom: 5px solid #f7f7f7;
  }
  .comment-head {
    padding: 15px 10px;
    display:flex;
    justify-content:space-between;
    border-bottom: 1px solid rgba(0, 0, 0, .1);
  }
  span > strong {
    padding-left: 8px;
  }
  .comment-info {
    padding: 15px 10px;
  }
  .user-logo {
    display: inline-block;
    width: 50px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .user-logo img {
    width: 100%;
    border-radius: 50%;
  }
  /* 用户评论 */
  .user-essay {
    font-size: 13px;
    padding: 10px 5px;
    color: #777;
  }
  /* 评论细节 */
  .other-info {
    font-size: 11px;
    color: #999;
    padding: 0 5px;
  }
  .style {
    margin-left: 10px;
  }
</style>