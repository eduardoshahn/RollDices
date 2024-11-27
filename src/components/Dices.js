import '../css/Dices.scss'
import rollToIndex from '../hooks/useRollDices';

const Dices = () => {
    return <div>

        <div id='dados' class="viewport">
        <div class="cube bis index-1">
            <div class="side">
            <div>1</div>
            </div>
            <div class="side">
            <div>2</div>
            </div>
            <div class="side">
            <div>3</div>
            </div>
            <div class="side">
            <div>4</div>
            </div>
            <div class="side">
            <div>5</div>
            </div>
            <div class="side">
            <div>6</div>
            </div>
        </div>
        <div class="cube bis index-2">
            <div class="side">
            <div>1</div>
            </div>
            <div class="side">
            <div>2</div>
            </div>
            <div class="side">
            <div>3</div>
            </div>
            <div class="side">
            <div>4</div>
            </div>
            <div class="side">
            <div>5</div>
            </div>
            <div class="side">
            <div>6</div>
            </div>
        </div>
        <div class="cube bis index-3">
            <div class="side">
            <div>1</div>
            </div>
            <div class="side">
            <div>2</div>
            </div>
            <div class="side">
            <div>3</div>
            </div>
            <div class="side">
            <div>4</div>
            </div>
            <div class="side">
            <div>5</div>
            </div>
            <div class="side">
            <div>6</div>
            </div>
        </div>
        <div class="cube bis index-4">
            <div class="side">
            <div>1</div>
            </div>
            <div class="side">
            <div>2</div>
            </div>
            <div class="side">
            <div>3</div>
            </div>
            <div class="side">
            <div>4</div>
            </div>
            <div class="side">
            <div>5</div>
            </div>
            <div class="side">
            <div>6</div>
            </div>
        </div>
        <div class="cube bis index-5">
            <div class="side">
            <div>1</div>
            </div>
            <div class="side">
            <div>2</div>
            </div>
            <div class="side">
            <div>3</div>
            </div>
            <div class="side">
            <div>4</div>
            </div>
            <div class="side">
            <div>5</div>
            </div>
            <div class="side">
            <div>6</div>
            </div>
        </div>
        <div class="cube bis index-6">
            <div class="side">
            <div>1</div>
            </div>
            <div class="side">
            <div>2</div>
            </div>
            <div class="side">
            <div>3</div>
            </div>
            <div class="side">
            <div>4</div>
            </div>
            <div class="side">
            <div>5</div>
            </div>
            <div class="side">
            <div>6</div>
            </div>
        </div>
        <br></br>
        <div class="cube bis index-1">
            <div class="side">
            <div>1</div>
            </div>
            <div class="side">
            <div>2</div>
            </div>
            <div class="side">
            <div>3</div>
            </div>
            <div class="side">
            <div>4</div>
            </div>
            <div class="side">
            <div>5</div>
            </div>
            <div class="side">
            <div>6</div>
            </div>
        </div>
        <div class="cube bis index-2">
            <div class="side">
            <div>1</div>
            </div>
            <div class="side">
            <div>2</div>
            </div>
            <div class="side">
            <div>3</div>
            </div>
            <div class="side">
            <div>4</div>
            </div>
            <div class="side">
            <div>5</div>
            </div>
            <div class="side">
            <div>6</div>
            </div>
        </div>
        <div class="cube bis index-3">
            <div class="side">
            <div>1</div>
            </div>
            <div class="side">
            <div>2</div>
            </div>
            <div class="side">
            <div>3</div>
            </div>
            <div class="side">
            <div>4</div>
            </div>
            <div class="side">
            <div>5</div>
            </div>
            <div class="side">
            <div>6</div>
            </div>
        </div>
        <div class="cube bis index-4">
            <div class="side">
            <div>1</div>
            </div>
            <div class="side">
            <div>2</div>
            </div>
            <div class="side">
            <div>3</div>
            </div>
            <div class="side">
            <div>4</div>
            </div>
            <div class="side">
            <div>5</div>
            </div>
            <div class="side">
            <div>6</div>
            </div>
        </div>
        <div class="cube bis index-5">
            <div class="side">
            <div>1</div>
            </div>
            <div class="side">
            <div>2</div>
            </div>
            <div class="side">
            <div>3</div>
            </div>
            <div class="side">
            <div>4</div>
            </div>
            <div class="side">
            <div>5</div>
            </div>
            <div class="side">
            <div>6</div>
            </div>
        </div>
        <div class="cube bis index-6">
            <div class="side">
            <div>1</div>
            </div>
            <div class="side">
            <div>2</div>
            </div>
            <div class="side">
            <div>3</div>
            </div>
            <div class="side">
            <div>4</div>
            </div>
            <div class="side">
            <div>5</div>
            </div>
            <div class="side">
            <div>6</div>
            </div>
        </div>
        </div>
        <div class="buttons">
        <button onClick={rollToIndex}>ROLL</button>
        </div>

    </div>
}

export default Dices;