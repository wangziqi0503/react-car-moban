import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 300px;
    margin: 0 auto;
    .box {
        background:skyblue;
    }
    .titletop{
        width: 300px;
        font-size:36px;
        text-align: center
    }
`;

export const ListItem = styled.div`
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic{
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    .title {
        line-height: 27px;
        font-size: 18px;
        font-weight: bold;
    }
    .desc {
        line-height: 24px;
        color: #999;
    }
`;

export const BackTop = styled.div`
    position: fixed;
    width:60px;
    height:60px;
    text-align:center;
    line-height:60px;
    right:100px;
    bottom:100px;
`;