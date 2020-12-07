$(function () {
  function countDown(time, cback) {
    let i = 0;
    let inter = setInterval(function () {
      $(".time").html(time - Math.floor(i));
      i++;
      if (i > time) {
        clearInterval(inter);
        cback();
      }
    }, 100);
  }

  var s = Snap("#icon");
  var transformer = Snap.selectAll("svg *:not(#bg-circ)");
  transformer.animate({ fill: "#fff" }, 1000);
  var bg = Snap.select("#bg-circ");
  bg.animate({ fill: "#B3876F" }, 1000);
  var text = s.text(50, 50, "60");
  transformer.animate({opacity: 0}, 1000)

  var newS = Snap.parse("<g transform=\"translate(0,-197)\">\r\n  <path transform=\"rotate(267.55)\" d=\"m-247.8 31.938c-0.28373 0.054117-0.56584 0.12364-0.83399 0.23242-0.23876 0.11156-0.45643 0.265-0.64903 0.44435-0.16008 0.12192-0.2563 0.31839-0.26308 0.51854 0.01439 0.26683 0.11706 0.51996 0.15066 0.78431 0.04684 0.39553 0.02814 0.79492-0.00679 1.1906-0.04787 0.63727-0.11269 1.2734-0.14387 1.9118-0.01476 0.53094 0.02762 1.0612 0.07227 1.5898 0.022 0.27204 0.03014 0.54685-0.01738 0.81682-0.04415 0.27156-0.1249 0.53525-0.18574 0.80326-0.04884 0.24125-0.13131 0.48382-0.1087 0.73275 0.02 0.27271 0.18458 0.53026 0.42586 0.65982 0.24021 0.12888 0.51082 0.18769 0.77072 0.26469 0.6047 0.15931 1.2096 0.31775 1.8145 0.47656 0.28424 0.065759 0.57592 0.088232 0.86662 0.10276 0.28897 0.02166 0.56769-0.081665 0.81914-0.21459 0.65387-0.33776 1.3012-0.68838 1.9607-1.0151 0.32607-0.15692 0.65635-0.30459 0.98831-0.44855 0.34601-0.15473 0.69772-0.29744 1.0387-0.46299 0.24826-0.12304 0.46721-0.36766 0.45933-0.65877-0.00379-0.28097-0.22899-0.51842-0.50024-0.5676-0.28406-0.057601-0.57613-0.037567-0.86414-0.051989-0.47588-0.015612-0.95217-0.015242-1.428-0.027679-0.22149-0.010013-0.44406-0.11-0.57686-0.29168-0.13275-0.19674-0.1596-0.44117-0.1863-0.6712-0.0398-0.36804-0.04956-0.73864-0.04988-1.1086 3e-5 -0.27222 0.04462-0.54146 0.11125-0.80481 0.0761-0.26332 0.1114-0.54248 0.23055-0.79089 0.13964-0.18574 0.38619-0.23842 0.58847-0.33159 0.27162-0.084223 0.56107-0.088372 0.84301-0.10835 0.33391-0.007554 0.66654 0.032112 1 0.043089 0.27839 0.02069 0.60063 0.039212 0.81166-0.18031 0.20451-0.17096 0.15985-0.49096-0.02053-0.66111-0.21285-0.1937-0.4918-0.29426-0.74489-0.42498-0.76487-0.36298-1.5312-0.72298-2.2996-1.0784-0.34734-0.15325-0.711-0.26522-1.074-0.37453-0.3213-0.092724-0.65044-0.15664-0.98256-0.19514-0.59267-0.082937-1.1922-0.094492-1.7896-0.10664-0.07552 0.001302-0.15104 0.002604-0.22656 0.003906z\" style=\"paint-order:normal\"/>\r\n  <path transform=\"rotate(-75.332)\" d=\"m-247.64 94.742c-0.18047 0.069907-0.32098 0.21075-0.46257 0.33825-0.17796 0.15443-0.27802 0.38008-0.31357 0.60974-0.05244 0.24164-0.0646 0.48906-0.05589 0.7356 0.00274 0.26318 0.04685 0.52222 0.09961 0.7793 0.04965 0.27408 0.13467 0.53946 0.21557 0.80543 0.09601 0.32733 0.20462 0.65074 0.30787 0.97582 0.33849 1.0053 0.6818 2.009 1.0294 3.0113 0.38016 1.1004 0.76032 2.2008 1.1405 3.3012 0.08875 0.27889 0.174 0.55885 0.25586 0.83984 0.05716 0.26577 0.07288 0.53951 0.05338 0.81045-0.02657 0.30419-0.05898 0.60787-0.09484 0.91113-0.03691 0.23957 0.02231 0.53344 0.25539 0.65388 0.18723 0.11147 0.41541 0.10041 0.62476 0.08458 0.28328-0.02211 0.56593-0.05319 0.84762-0.09054 0.23459-0.03048 0.4809-0.05294 0.68753-0.17896 0.18964-0.10555 0.30328-0.30949 0.34823-0.51646 0.05059-0.24297 0.02501-0.493 0.03248-0.73921 4.4e-4 -0.22699 8.7e-4 -0.45398 0.00131-0.68096 0.16876-0.02239 0.33508 0.12093 0.33984 0.29101 0.10352 0.73894 0.20703 1.4779 0.31055 2.2168 0.00909 0.25602-0.04732 0.52614-0.21625 0.72583-0.1809 0.19962-0.45285 0.27023-0.70637 0.32612-0.27294 0.06269-0.55078 0.09958-0.82744 0.14142-1.9967 0.28529-3.9934 0.57047-5.9902 0.85546-0.30064 0.04564-0.60077 0.09447-0.90039 0.14648-0.28637 0.06048-0.57312 0.11999-0.85722 0.19041-0.50447 0.13704-1.0094 0.27221-1.512 0.41624-0.59897 0.16875-1.1979 0.33775-1.7968 0.50663-0.44243 0.11431-0.88645 0.22236-1.3322 0.3229-0.70597 0.16247-1.412 0.32467-2.1192 0.48159-1.3711 0.30743-2.7434 0.60933-4.115 0.91426-0.51802 0.11101-1.0362 0.22104-1.5547 0.33008-0.29402 0.04955-0.58858 0.09567-0.88387 0.13708-0.47101 0.06946-0.942 0.1391-1.413 0.20863-0.10699 0.18629-0.01993 0.41815 0.12305 0.55859 0.16195 0.16781 0.33571 0.34828 0.38671 0.58398-0.03451 0.24914-0.2441 0.4716-0.16416 0.73382 0.01983 0.09196 0.07176 0.17407 0.13682 0.24079 0.26784 0.08451 0.52431-0.06923 0.77425-0.14465 0.2598-0.09082 0.52081-0.17804 0.78239-0.26355 0.26679-0.07043 0.53843-0.12323 0.81336-0.14852 0.27976-0.02549 0.55996-0.04526 0.8407-0.05601 0.29095-0.00435 0.58217 0.00523 0.87323 0.00602 0.70088 0.00658 1.4018 0.01586 2.1026 0.02078 0.30386 4e-4 0.60792-3.6e-4 0.91148-0.01478 0.28248-0.01061 0.56429-0.03304 0.84599-0.05589 0.36827-0.03053 0.73643-0.06289 1.104-0.10114 0.27574-0.03093 0.55059-0.0686 0.82503-0.10944 0.28901-0.05083 0.57742-0.10486 0.86523-0.16211 0.37602-0.08705 0.7516-0.17595 1.1259-0.27006 0.47857-0.12024 0.95595-0.24519 1.4354-0.36174 0.28867-0.07047 0.57653-0.14533 0.86808-0.20304 0.25774-0.05226 0.51949-0.08383 0.78243-0.09116 0.28237-0.01862 0.56534-0.01493 0.84763 0.00305 0.82071 0.04136 1.6412 0.08672 2.4618 0.13102 0.7149 0.04002 1.4298 0.08004 2.1447 0.12005 0.54557 0.01693 1.0911 0.03386 1.6367 0.05078 0.2903 0.00158 0.58056-0.00102 0.87078-0.0078 0.57355-0.03241 1.1469-0.06837 1.7198-0.1114 0.49718-0.03812 0.993-0.09147 1.4894-0.13779 0.76201-0.07282 1.5235-0.15144 2.285-0.22887 0.3017-0.03024 0.60272-0.06758 0.90248-0.11319 0.49188-0.07228 0.9809-0.16227 1.4708-0.24665 0.28582-0.05562 0.57083-0.11515 0.85499-0.17873 0.22025-0.06179 0.45463-0.09551 0.65099-0.22062 0.19143-0.11957 0.29092-0.34859 0.29539-0.56887-0.00428-0.29186-0.04879-0.5814-0.08475-0.87069-0.04753-0.36627-0.09633-0.73238-0.14436-1.0986-0.02614-0.25894-0.02747-0.52011-0.0039-0.7793 0.03528-0.28765 0.06126-0.57694 0.11868-0.86134 0.05442-0.27358 0.10895-0.54731 0.17242-0.81895 0.17772-0.75563 0.35712-1.5108 0.54093-2.265 0.07176-0.30393 0.14006-0.60862 0.20508-0.91406 0.03497-0.24438 0.1131-0.50047 0.0332-0.74414-0.09124-0.26714-0.28199-0.48536-0.47335-0.68689-0.1995-0.20065-0.42699-0.37284-0.67313-0.51233-0.25522-0.13873-0.51332-0.27186-0.77432-0.39935-0.37146-0.18524-0.74291-0.37049-1.1144-0.55573-0.25651-0.14128-0.51302-0.28255-0.76953-0.42383-0.23249-0.13977-0.44554-0.30812-0.66211-0.4707-1.4049-1.1234-2.8091-2.2478-4.2145-3.3706-0.38945-0.30874-0.77889-0.61749-1.1683-0.92623l-1.668-1.2559c-0.24284-0.16602-0.48568-0.33203-0.72851-0.49805-0.25065-0.14714-0.50131-0.29427-0.75196-0.44141-0.23374-0.12269-0.48006-0.21802-0.72461-0.31641-0.24288-0.095044-0.49406-0.16869-0.74932-0.22206-0.25634-0.054355-0.51836-0.069386-0.77865-0.093698l-0.00718-6.43e-4 -0.04102 0.011719z\" fill=\"#f2f2f2\" opacity=\".95\" style=\"paint-order:normal\"/>\r\n  <g fill=\"#ffb380\">\r\n   <path d=\"m44.234 261.53c-0.2528 0.03618-0.52001 0.06669-0.73633 0.21485-0.19199 0.17746-0.30577 0.43719-0.29146 0.69972-0.007545 0.26087 0.034731 0.5205 0.026262 0.78131-0.012884 0.28863-0.10661 0.56509-0.1919 0.83878-0.081198 0.25535-0.13586 0.52058-0.13544 0.78948-0.004808 0.27715 0.016977 0.55393 0.03457 0.83036 0.067073 0.92387 0.13158 1.848 0.18527 2.7727 0.011804 0.30448 0.036841 0.60828 0.06152 0.91188 0.008049 0.19421 0.14581 0.40407 0.35806 0.39918 0.25077 0.00554 0.40837-0.24071 0.49396-0.44552 0.10322-0.26034 0.14622-0.5395 0.20852-0.81146 0.060379-0.29236 0.11336-0.5862 0.16213-0.88069 0.048956-0.28704 0.082922-0.57583 0.10146-0.86642 0.030093-0.27451 0.02855-0.55315 0.076073-0.82519 0.056354-0.27664 0.10196-0.55775 0.19788-0.82415 0.10356-0.29391 0.22745-0.57998 0.34591-0.86805 0.06648-0.24303 0.10422-0.49697 0.073579-0.74871-0.044532-0.31188-0.10074-0.62208-0.16771-0.92997-0.055602-0.26718-0.11047-0.53452-0.16563-0.80179 0.11133 0.1237 0.22266 0.2474 0.33398 0.3711-0.050384-0.13265-0.077885-0.28302-0.17969-0.38868 0.024806 0.04438-0.071348 0.06382-0.070313 0.01563-0.21525-0.13373-0.45883-0.26068-0.7207-0.23438z\" style=\"paint-order:normal\"/>\r\n   <path d=\"m48.195 247.27c-0.28015 0.02435-0.55532 0.09043-0.83601 0.11385-0.56454 0.07063-1.1308-0.01344-1.6954-0.03772-0.50823-0.03343-1.0251-0.01378-1.5209 0.10936-0.3365 0.08754-0.66457 0.27158-0.85096 0.57387-0.26174 0.39059-0.36135 0.85974-0.46356 1.3113-0.10745 0.52905-0.24436 1.052-0.34338 1.5827-0.051818 0.25118-0.046105 0.52726 0.096376 0.74948 0.13898 0.27548 0.45074 0.36187 0.70846 0.48711 0.6249 0.27202 1.2647 0.50803 1.8955 0.76588 0.9711 0.39053 1.9458 0.77198 2.92 1.1548 0.563 0.1624 1.1352 0.29022 1.709 0.4082 0.3385 0.0551 0.7005-0.02673 0.97266-0.23828 0.19825-0.19338 0.25481-0.47589 0.30859-0.73633l0.37695-3.752c0.081621-0.46234 0.18449-0.92045 0.28516-1.3789-0.00252-0.24717-0.21849-0.43761-0.44531-0.49414-0.79598-0.16129-1.5957-0.30783-2.3809-0.51758-0.24079-0.05827-0.48689-0.11425-0.73633-0.10156z\" style=\"paint-order:normal\"/>\r\n   <path d=\"m46.475 220.35c-0.23653 0.13022-0.24067 0.43164-0.26367 0.66796-0.019815 0.30491 0.01161 0.60939 0.02153 0.91402 0.005966 0.25138-0.001989 0.50834-0.08253 0.74895-0.092462 0.22411-0.09768 0.46994-0.11674 0.70813-0.040295 0.29204-0.26869 0.50252-0.43772 0.72743-0.24815 0.30681-0.51989 0.59341-0.78232 0.88785-0.38076 0.4202-0.76221 0.83976-1.1432 1.2597l-1.498 1.5547c-0.19137 0.21725-0.39182 0.42774-0.55836 0.66535-0.16148 0.22778-0.29553 0.4755-0.39286 0.73739-0.10368 0.2644-0.20545 0.53074-0.27537 0.80634-0.071814 0.28913-0.13546 0.5803-0.1884 0.8735-0.065078 0.32351-0.096239 0.65225-0.13189 0.97992-0.021885 0.2994-0.046636 0.59864-0.056283 0.89877-0.017021 0.32987-0.017574 0.66037-0.011366 0.99055 0.006184 0.39829 0.021155 0.79662 0.055917 1.1935 0.038854 0.48859 0.092451 0.9759 0.14465 1.4632 0.050637 0.44123 0.12566 0.87914 0.20054 1.3168 0.050135 0.2882 0.10223 0.57603 0.16686 0.8614 0.074513 0.35782 0.15716 0.71381 0.24247 1.0692 0.1788 0.76508 0.3635 1.5288 0.5495 2.2921 0.060552 0.28343 0.15027 0.55955 0.25696 0.8288 0.069728 0.17137 0.15665 0.36811 0.34973 0.42643 0.19481 0.08154 0.42171-0.00183 0.54439-0.16692 0.15804-0.19805 0.24709-0.44013 0.36018-0.6647 0.33062-0.70328 0.65295-1.4104 0.98162-2.1146 0.1019-0.24143 0.22273-0.49187 0.20088-0.76121-0.01546-0.27211-0.15364-0.51569-0.27342-0.75401-0.16012-0.30325-0.31889-0.6088-0.51437-0.89118-0.15464-0.22277-0.33259-0.4294-0.47445-0.66084-0.13759-0.22075-0.22788-0.46638-0.30387-0.71401-0.082563-0.27585-0.12238-0.56163-0.1657-0.84559-0.16276-1.0908-0.32014-2.1824-0.48078-3.2736-0.032208-0.2747-0.04755-0.55161-0.03711-0.82813 0.020263-0.26345 0.076242-0.52378 0.17032-0.77085 0.096652-0.24513 0.23608-0.46938 0.36746-0.69674 0.6257-1.0293 1.2522-2.058 1.8782-3.0871 0.22013-0.32886 0.46456-0.64039 0.70367-0.95546 0.20145-0.26267 0.4066-0.52259 0.60582-0.78693 0.19046-0.26491 0.38092-0.52981 0.57137-0.79472 0.15975-0.25936 0.16766-0.57138 0.2317-0.86101 0.060223-0.30533 0.12956-0.60962 0.1597-0.91988 0.038098-0.26989 0.051354-0.54327 0.027189-0.81509-0.013168-0.23869-0.075115-0.47261-0.08851-0.71066-6.89e-4 -0.07935 0.080961-0.12236 0.10547-0.1875-0.202-0.08393-0.31348-0.29238-0.44531-0.45703-0.050456-0.04856-0.083347-0.13244-0.15234-0.15625l-0.021485 0.00196z\" style=\"paint-order:normal\"/>\r\n   <path d=\"m46.943 220.42c-0.021797 0.02282 0.010822 0.06644-0.027343 0.07812-0.11011 0.23428-0.20371 0.47656-0.27148 0.72657-0.019747 0.25939-0.022205 0.52057 0.007813 0.77929 0.042322 0.25806 0.076086 0.5186 0.15234 0.76953 0.089374 0.27624 0.1831 0.55098 0.28125 0.82422 0.10009 0.25119 0.19163 0.50662 0.31836 0.7461 0.13401 0.25738 0.27203 0.51258 0.41406 0.76562 0.15755 0.2474 0.3151 0.49479 0.47266 0.74219 0.7168 1.0326 1.4336 2.0651 2.1504 3.0977 0.16211 0.24218 0.32422 0.48437 0.48633 0.72656 0.11898 0.24788 0.24855 0.49222 0.33008 0.75586 0.073568 0.15429 0.14714 0.30859 0.2207 0.46289 0.041666 0.05078 0.083333 0.10156 0.125 0.15234-0.016927 0.54818-0.033855 1.0964-0.050782 1.6445 0.022806 0.38949 0.040169 0.77931 0.068795 1.1684 0.019701 0.30495 0.045891 0.60953 0.057728 0.91494 0.010738 0.26365 0.02999 0.52942-0.009335 0.79163-0.038359 0.25813-0.081312 0.51874-0.17813 0.76236-0.093219 0.25471-0.21278 0.49827-0.33918 0.73789-0.26767 0.5227-0.53534 1.0454-0.803 1.5681-0.12074 0.25303-0.24797 0.50363-0.34375 0.76758-0.081259 0.24596-0.14886 0.49662-0.19336 0.75195-0.029614 0.25856-0.033386 0.52003-0.002189 0.77863 0.042326 0.25716 0.10869 0.5118 0.21771 0.74921 0.11083 0.26417 0.25872 0.51198 0.43365 0.73859 0.17661 0.22864 0.3788 0.4364 0.58726 0.63585 0.14881 0.13538 0.31621 0.24808 0.47646 0.36921 0.24525 0.07425 0.50463 0.08043 0.75878 0.07082 0.18612-0.0055 0.39297-0.01816 0.542-0.14309 0.20091-0.20974 0.25599-0.50543 0.35551-0.76841 0.092118-0.27376 0.18853-0.54602 0.28707-0.81753 0.10198-0.25213 0.22992-0.49241 0.34961-0.73632 0.12559-0.25666 0.26099-0.50862 0.37719-0.76977 0.10206-0.2389 0.1827-0.48893 0.22088-0.74641 0.043234-0.27834 0.046993-0.56076 0.064175-0.84146 0.032885-0.63198 0.06338-1.2641 0.091658-1.8963 0.010635-0.33595 0.022392-0.67186 0.026853-1.008 0.011239-0.27489 2.83e-4 -0.55026-0.03681-0.82295-0.035445-0.32521-0.0816-0.64913-0.1221-0.97373-0.03894-0.28972-0.067393-0.58106-0.12681-0.86761-0.10186-0.56107-0.20372-1.1221-0.30558-1.6832-0.060546-0.28581-0.12109-0.57161-0.18164-0.85742-0.067215-0.25734-0.12532-0.5181-0.22461-0.76562-0.11026-0.23372-0.24104-0.45726-0.38476-0.67188-0.18294-0.22656-0.36589-0.45313-0.54883-0.67969-1.2975-1.4805-2.5951-2.9609-3.8926-4.4414-0.18808-0.21971-0.37738-0.43871-0.54883-0.67188-0.14399-0.21634-0.27108-0.44464-0.36914-0.68555-0.091947-0.25979-0.15564-0.52802-0.22251-0.79501-0.063851-0.25908-0.1277-0.51817-0.19155-0.77725-0.10786-0.20796-0.23732-0.40394-0.37695-0.5918-0.040323-0.01987-0.059525-0.07455-0.11133-0.07226l-0.011719 0.00781z\" style=\"paint-order:normal\"/>\r\n   <path d=\"m45.742 235.61c-0.22374 0.01375-0.40899 0.18551-0.47852 0.39258-0.065476 0.25827-0.024293 0.52882-0.008968 0.79105 0.023832 0.29885 0.061829 0.59813 0.045099 0.89845-0.007605 0.35173-0.040531 0.70232-0.059948 1.0535-0.022829 0.36664-0.049712 0.73326-0.064074 1.1003-0.003409 0.29944 0.00377 0.59909 0.028079 0.8976 0.023162 0.29055 0.06252 0.57939 0.098874 0.86849 0.053443 0.28122 0.10691 0.60346 0.35288 0.78524 0.215 0.16757 0.49518 0.19458 0.75455 0.24015 0.2727 0.03324 0.54803 0.03266 0.82168 0.01211 0.3189-0.02184 0.63657-0.06111 0.95248-0.10916 0.26005-0.0456 0.52913-0.09163 0.763-0.21952 0.19132-0.11412 0.30876-0.32034 0.36928-0.52947 0.093491-0.32863 0.17878-0.65978 0.27957-0.98624 0.074732-0.2645 0.20466-0.50879 0.3511-0.73999 0.13407-0.22181 0.34116-0.40332 0.41797-0.65625 0.04572-0.15642-0.05202-0.30223-0.18282-0.37839-0.20785-0.13442-0.46549-0.18484-0.64495-0.36507-0.21615-0.17543-0.39665-0.39261-0.54138-0.62988-0.1081-0.20726-0.1284-0.44597-0.1276-0.67604-0.009749-0.33003 0.022049-0.65964 0.012379-0.98968-0.005581-0.26512-0.16662-0.52537-0.42568-0.60802-0.25248-0.10019-0.52654-0.03346-0.77744 0.03575-0.24788 0.06193-0.50347 0.15846-0.76163 0.09662-0.23488-0.04755-0.45413-0.14862-0.68447-0.21256-0.15718-0.05062-0.32354-0.08617-0.48945-0.07156z\" style=\"paint-order:normal\"/>\r\n   <circle cx=\"47.068\" cy=\"232.81\" r=\"3.0351\" style=\"paint-order:normal\"/>\r\n  </g>\r\n  <path d=\"m47.338 228.95c-0.33905 0.0663-0.65015 0.22724-0.94667 0.39942-0.38096 0.21582-0.75828 0.43803-1.1373 0.65722-0.3287 0.25232-0.61395 0.57918-0.75311 0.97457-0.095531 0.25616-0.14303 0.52847-0.17152 0.79951-0.051354 0.54553-0.11004 1.0906-0.15118 1.637-0.016382 0.28392-0.028264 0.57538 0.056278 0.85069 0.086149 0.32534 0.17728 0.64997 0.23242 0.98242-0.05599-0.0944-0.11198-0.1888-0.16797-0.2832 0.045402 0.21333 0.19932 0.40855 0.41211 0.47265 0.13655-0.22712 0.18717-0.51364 0.099609-0.76757-0.061198-0.12175-0.1224-0.24349-0.18359-0.36524 0.13102-0.2458 0.31766-0.47846 0.34181-0.76568 0.005003-0.29575-0.074472-0.58478-0.095712-0.87885-0.028732-0.26663-0.079097-0.54603 0.009765-0.80664 0.096012-0.27726 0.32847-0.47064 0.52712-0.67418 0.21443-0.21886 0.46304-0.39965 0.72214-0.56173 0.2621-0.17292 0.5276-0.34112 0.79715-0.50203 0.19413-0.10592 0.43249-0.15356 0.64696-0.08433 0.32891 0.12371 0.55434 0.40685 0.79688 0.64649 0.30973 0.3405 0.6209 0.68021 0.91406 1.0352 0.22474 0.29816 0.36409 0.64847 0.48337 0.99943 0.089863 0.22651 0.12936 0.47027 0.11795 0.71357-0.014661 0.36602-0.04794 0.73197-0.10718 1.0936 1.26e-4 0.14521-0.067289 0.34796 0.056641 0.45508 0.2278 0.01407 0.3058-0.26701 0.35137-0.44546 0.072895-0.30824 0.11659-0.62276 0.15815-0.93656 0.052123-0.38341 0.079952-0.77242 0.038918-1.1583-0.029559-0.36933-0.091898-0.73687-0.19202-1.0936-0.089866-0.31913-0.24509-0.62615-0.48359-0.86-0.36808-0.3775-0.79523-0.68992-1.2163-1.0048-0.27054-0.20221-0.54511-0.42093-0.87914-0.50517-0.091063-0.01668-0.18457-0.03342-0.27734-0.02344z\" fill=\"#28170b\" style=\"paint-order:normal\"/>\r\n  <path d=\"m44.473 286.38c-0.27869 0.01951-0.55327 0.1042-0.83398 0.08203-0.092734-0.01099-0.18452-0.02736-0.27539-0.04883-0.11949 0.25597-0.22536 0.54227-0.16079 0.82799 0.038156 0.2519 0.10451 0.49954 0.19775 0.73666 0.10799 0.27483 0.41037 0.43258 0.69741 0.42559 0.40703-0.00294 0.81233-0.04736 1.2182-0.07481 0.30136-0.03064 0.60403-0.0516 0.90395-0.09448 0.11449-0.01429 0.22723-0.03918 0.34078-0.05923 0.095703-0.20247 0.19141-0.40495 0.28711-0.60742-0.25673-0.15729-0.56763-0.14742-0.85081-0.21769-0.25055-0.07334-0.38182-0.32593-0.44785-0.5601-0.037303-0.1181-0.070756-0.23738-0.10954-0.35502-0.25712-0.04165-0.51601-0.0817-0.77734-0.07422-0.063151 0.00651-0.1263 0.01302-0.18945 0.01953z\" fill=\"#ffb380\" opacity=\".9\" style=\"paint-order:normal\"/>\r\n </g>")
  s.append(newS)
})
