var files = ["result.pdf", "data.docx", "pdfData.jpg", "#exp.mp4", "exam.mp4"];
var checkFile = (fileName) =>
  fileName.startsWith("#") ||
  fileName.endsWith(".pdf") ||
  fileName.endsWith(".docx");
("Store");
("Delete");
files.forEach((file) => console.log(`${file} : ${checkFile(file)}`));
