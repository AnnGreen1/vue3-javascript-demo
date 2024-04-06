import html2canvas from "html2canvas";
import jsPDF from "jspdf";
/**
 * 作者: 唐志远
 * 链接: https://fe32.top/articles/vue20003/#%E6%AD%A5%E9%AA%A4
 * 来源: 唐志远
 * 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */
export const htmlToPDF = async (htmlId, title = "报表", bgColor = "#fff") => {
    let pdfDom = document.getElementById(
        htmlId
    );
    pdfDom.style.padding = "0 10px !important";
    const A4Width = 595.28;
    const A4Height = 841.89;
    let canvas = await html2canvas(pdfDom, {
        scale: 2,
        useCORS: true,
        backgroundColor: bgColor,
    });
    let pageHeight = (canvas.width / A4Width) * A4Height;
    let leftHeight = canvas.height;
    let position = 0;
    let imgWidth = A4Width;
    let imgHeight = (A4Width / canvas.width) * canvas.height;
    /*
       根据自身业务需求  是否在此处键入下方水印代码
      */


    const ctx = canvas.getContext('2d'); // 建立一个二维渲染上下文
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.rotate((90 * Math.PI) / 180);  // 水印角度
    ctx.font = '20px Microsoft Yahei';
    ctx.fillStyle = 'rgba(184, 184, 184, 0.8)';
    for (let i = canvas.width * -1; i < canvas.width; i += 240) {
        for (let j = canvas.height * -1; j < canvas.height; j += 200) {
            // 填充文字，x 间距, y 间距
            ctx.fillText('水印名', i, j); // x,y 坐标，单位像素
        }
    }




    let pageData = canvas.toDataURL("image/jpeg", 1.0);
    /**
     * "p"：这是指定PDF文档的页面方向，"p"代表"portrait"，即纵向页面方向。如果将其设置为"l"，则代表"landscape"，即横向页面方向。
     * "pt"：这是指定页面尺寸的单位，"pt"代表"points"，即页面尺寸以点（point）为单位。点是一种常用的印刷单位，1英寸等于72点。
     * "a4"：这是指定页面尺寸的名称，"a4"代表ISO 216标准定义的A4纸张尺寸，尺寸为210mm × 297mm。通过指定"a4"，可以确保创建的PDF文档尺寸符合A4纸张的标准尺寸。
     */
    let PDF = new jsPDF("p", "pt", "a4");
    if (leftHeight < pageHeight) {
        // 将图像添加到PDF文档
        PDF.addImage(pageData, "JPEG", 0, 0, imgWidth, imgHeight);
    } else {
        while (leftHeight > 0) {
            PDF.addImage(pageData, "JPEG", 0, position, imgWidth, imgHeight);
            leftHeight -= pageHeight;
            position -= A4Height;
            if (leftHeight > 0) PDF.addPage();
        }
    }
    // 保存PDF文档
    PDF.save(title + ".pdf");
};
