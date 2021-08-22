import renderToDom from './renderToDom';

const bearFormBuilder = () => {
  const domString = `
    <div id= "bearForm>
    <form>
  <div class="mb-3">
    <label for="bearName" class="form-label">Bear Name</label>
    <input type="text" class="form-control" id="bearName" required />
  </div>
  <div class="mb-3">
    <label for="bearImage" class="form-label">Bear Image</label>
    <input type="text" class="form-control" id="bearImage" required>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
    `;

  renderToDom('#bearFormContainer', domString);
};

export default bearFormBuilder;
