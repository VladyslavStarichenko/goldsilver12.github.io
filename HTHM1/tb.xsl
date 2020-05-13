<?xml version="1.0" encoding="ISO-8859-1"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform"><xsl:template match="/">

    
  <html >
       <body  background = "img/logo2.jpg">
    <h1 align="center"><font size="+9" color="gold">List of the products</font></h1>
    <table border="5"  cellpadding="5" align="center">
      <tr bgcolor="gold">
        <th><font size="+5" color="black">Fruits</font></th>
          <th><font size="+5" color="black">Vegetables</font></th>
          <th><font size="+5" color="black">Nuts</font></th>
          <th><font size="+5" color="black">Carbohydrates</font></th>
          <th><font size="+5" color="black">Proteins</font></th>
      </tr>
      <xsl:for-each select="products/choose/ch">
      <tr bgcolor="gold" width = "70" height = "70" align="center">
          <td width = "100"><xsl:value-of select="Fruits"/></td>
          <td width = "100"><xsl:value-of select="Vegetables"/></td>
          <td width = "100"><xsl:value-of select="Nuts"/></td>
          <td width = "100"><xsl:value-of select="Carbohydrates"/></td>
          <td width = "100"><xsl:value-of select="Proteins"/></td>
      </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template></xsl:stylesheet>