
package com.recipe.domain;

import java.io.File;
import java.util.Date;
import java.util.List;

public class User {

  private String userName;
  private String userId;
  private int password;
  private int phone;
  private Date ragDate;
  private String roll;
  
  //--------------------회원가입시 받을 내용
  
  private String blog;      //회원가입 할 땐 입력 x하고 프로필 수정때만.
                              //블로그는 의견이 일치하지 않으면 빼도됨.
  private String introduce; //회원가입 할 땐 입력 x하고 프로필 수정때만.
  private File profileImage;//회원가입 할 땐 입력 x하고 프로필 수정때만.
  //-----------------------회원정보 
  
  private int myRecipeNo;     //내가 등록한 레시피 등록번호를 들고오기
  private int myRecipeCount;  //내가 등록한 레시피 갯수 
  //-----------------------레시피정보 
  
  private int follower;     //현재  ~명이 팔로잉 중입니다.
  private int following;    //현재  팔로잉 ~명 (내가 팔로잉 한거)
  private List<String> followUserId; //내가 팔로잉 한 유저 
  //------------------------팔로잉기능 
  
  private int scrapNo;      //현재  스크랩 ~개
 // private recipe userRecipeNo;     스크랩 한 레시피 보여주기. recipe도메인 받으면 open 
  
  //------------------------스크랩 기능 
  
  //-------------------마이페이지기능
  
  private int ranking;      //랭킹시스템을 도입한다면 자신의 랭킹 보여주기
  //-------------------보여지진 않지만 존재해야 하는 것.
  
}
