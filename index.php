<?php $title='Sekection'; include(__DIR__ . '/../mall/header.php'); ?>

<div id='flash'>
  <p id='text' class='red'>Hi this text should be replaced when page and DOM is loaded.</p>
  <table>
    <tr>
      <td>
        <form id='inoutput'>
          <p>
            <label>Välj: <select id="selection">
            </select></label>
            <input id='roll' type='button' value='Välj' />
            <input id='newquestion' type='button' value='Ny fråga' />            
          </p>
        </form>
      </td>
      <td>
        <img id="photo">
      </td>
    </tr>
  </table>
  <div id='log'>Svar:</div>
</div>

<?php $path=__DIR__; include(__DIR__ . '/../mall/footer.php'); ?>
