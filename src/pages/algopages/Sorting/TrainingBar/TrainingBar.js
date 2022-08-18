import classes from "./TrainingBar.module.css"

function TrainingBar(props){

    function sortable(section, onUpdate) {
        var dragEl, nextEl, newPos, dragGhost;
      
        let oldPos = [...section.children].map((item) => {
          item.draggable = true;
          let pos = document.getElementById(item.id).getBoundingClientRect();
          return pos;
        });
      
        function _onDragOver(e) {
          e.preventDefault();
      
          var target = e.target;
          if (target && target !== dragEl && target.nodeName == "DIV") {
            var targetPos = target.getBoundingClientRect();
            var next =
              (e.clientY - targetPos.top) / (targetPos.bottom - targetPos.top) >
                0.5 ||
              (e.clientX - targetPos.left) / (targetPos.right - targetPos.left) > 0.5;
            section.insertBefore(dragEl, (next && target.nextSibling) || target);
          }
        }
      
        function _onDragEnd(evt) {
          evt.preventDefault();
          newPos = [...section.children].map((child) => {
            let pos = document.getElementById(child.id).getBoundingClientRect();
            return pos;
          });
      
          dragEl.classList.remove("ghost");
          section.removeEventListener("dragover", _onDragOver, false);
          section.removeEventListener("dragend", _onDragEnd, false);
        }
      
        section.addEventListener("dragstart", function (e) {
          dragEl = e.target;
      
          section.addEventListener("dragover", _onDragOver, false);
          section.addEventListener("dragend", _onDragEnd, false);
      
          setTimeout(function () {
            dragEl.classList.add("ghost");
          }, 0);
        });
      }

    return (
        <div>
                TrainingBar
        </div>
    );
}

export default TrainingBar;