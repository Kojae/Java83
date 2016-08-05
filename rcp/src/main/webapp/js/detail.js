$(function(){
	$('.detail').on('click', function(){
		$('#detail_pop_up').bPopup({
			follow: [false, false], //x, y
			onOpen:function(){
				$("body").css("overflow", "hidden");
			},
			onClose:function(){ 
				$("body").css("overflow", "auto");
			}
			
			});
			
		});
	});

//--------------핸들바스 ---------------------


<script id="tr-template" type="text/x-handlebars-template"> 
{{#each data}}

      <div
        class="col-xs-3 col-sm-3 col-md-3 rcp-listSize rcp-list-margin">
        <div class="thumbnail row relative">
          <div class="rcp-profile-position">
            <img src="images/profile.jpg" class="img-circle rcp-profile">
          </div>
          <img src="images/5.jpg" class="image1" class="rcp-relative">
         
          <div class="rcp-caption">
            <h4 class="pull-right rcp-Grade">평점</h4>
            <h5 class="pluu-left rcp-relative rcp-profileName">

              <span class="glyphicon glyphicon-star"></span>DDu BBo KKi
            </h5>
            <!-- 두번째 줄 (레시피명, 점수)  -->
            <div class="rcp-relative rcp-bottom">
              <h4 class="pull-right rcp-recipeGrade">{{gradePoint}}</h4>
              <h4 class="pull-left rcp-left_position">
                <span><a href="#">{{recipeName}} </a></span>
              </h4>

            </div>
          </div>
          <!--  레시피 정보 끝 -->



          <!--  슬라이드 start -->
          <div id="myCarousel" class="carousel slide rcp-relative">
            <!--  왼쪽 버튼 시작  -->
            <a href="#myCarousel" role="button" data-slide="prev"
              class="rcp-left-slideButton"> <span
              class="glyphicon glyphicon-chevron-left" aria-hidden="false"></span>

            </a>
            <!--  왼쪽 버튼 끝  -->

            <!--  오른쪽 버튼 시작  -->
            <a href="#myCarousel" role="button" data-slide="next"
              class="rcp-right-slideButton"> <span
              class="glyphicon glyphicon-chevron-right" aria-hidden="false"></span>

            </a>
            <!--  오른쪽 버튼 끝   -->

            <!--  레시피 내용 시작  -->
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <div class="rcp-comment col-md-offset-1 col-md-10">
                  <p>어린시절의 추억을 먹다 !!</p>
                  <p>즉석에서 뚝딱 먹을 수 있는</p>
                  <p>간편한 추억의 국물 떡볶이 !!</p>
                </div>
                <div class="col-md-1"></div>
              </div>

              <div class="item">
                <div class="rcp-comment col-md-offset-1 col-md-10">
                  <!--  image 크기를 잘 몰라서 일단 %로 안하고 85px로 고정해놓 -->
                  <img src="images/view.png" class="img-rounded rcp-images">
                  <img src="images/view.png" class="img-rounded rcp-images">
                </div>
                <div class="col-md-1"></div>
              </div>

              <div class="item">
                <div class="rcp-comment col-md-offset-1 col-md-10">
                  <div class="col-md-6">
                    <p class="rcp-left-condiment">떡볶이</p>
                    <p class="rcp-left-condiment">떡볶이</p>
                    <p class="rcp-left-condiment">떡볶이</p>
                  </div>

                  <div class="col-md-6">
                    <p class="rcp-right-condiment">간장</p>
                    <p class="rcp-right-condiment">간장</p>
                    <p class="rcp-right-condiment">간장</p>
                  </div>
                  <div class="col-md-1"></div>
                </div>
              </div>
            </div>
            <!--  레시피 내용 끝  -->

          </div>


          <!-- 하단 버튼들 시작 (요리시간, 좋아요, 스크랩) -->
          <div class="rcp-240">

            <div class="glyphicon glyphicon-time rcp-cookTime col-xs-4"
              align="center">
              <b>10분</b>
            </div>
            <div
              class="glyphicon glyphicon-heart-empty rcp-cookTime col-xs-4"
              align="center">
              <a href="#"><b>좋아요</b></a>
            </div>
            <div class="glyphicon glyphicon-pushpin rcp-cookTime col-xs-4"
              align="center">
              <a href="#"><b>스크랩</b></a>
            </div>


          </div>
          <!--  버튼 끝  -->
        </div>
        <!--  col-md-3 row div태그  -->
      </div>
      <!-- col-md-3 div태그 끝  -->
</div>
</div>
</div>

{{/each}}
</script>



//
//(function($){
//    $.aniPage=function(e,type){
//        if(e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0){
//            $(".contInner").animate({
//                scrollTop:$(window).scrollTop()-$(window).height()
//            },800,function(){
//                    $.aniOk = 0;
//            });
//        }else{
//            $(".rcp-body").animate({
//                scrollTop:$(window).scrollTop()+$(window).height()
//            },800,function(){
//                    $.aniOk = 0;
//            });
//        }
//    };
//})(jQuery);
//$(function(){
//    $(".contInner").height($(window).height());
//    $.aniOk=0;
//    $(window).scrollTop(0);
//});
//$(document).on("mousewheel DOMMouseScroll",function(e){
//    e.preventDefault();
//    if($.aniOk == 0){
//        $.aniPage(e,e.type);
//        $.aniOk = 1;
//    }
//});
